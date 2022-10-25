/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */

import { Pedometer } from '.';
import { CouchBase } from '@triniwiz/nativescript-couchbase';
import { ApplicationSettings, Utils } from '@nativescript/core';
import { DatabaseName, getNotificationDescription, getNotificationTitle, ServiceAction, ServiceState, ServiceStateProperty } from './common';

declare namespace com {
  namespace tns {
    class NativeScriptActivity extends android.app.Activity {}
  }
}

@NativeClass()
@JavaProxy('me.manojdcoder.StepCounterService')
class StepCounterService extends android.app.Service {
  private isStarted = false;

  private wakeLock?: android.os.PowerManager.WakeLock;
  private pedometer?: Pedometer;
  private database?: CouchBase;

  public override onBind(param0: android.content.Intent): android.os.IBinder {
    return null;
  }

  public override onStartCommand(intent: android.content.Intent, flags: number, startId: number): number {
    if (intent != null) {
      const action = intent.getAction();
      switch (action) {
        case ServiceAction.Start:
          this.start();
          break;
        case ServiceAction.Stop:
          this.stop();
          break;
      }
    }

    return android.app.Service.START_STICKY;
  }

  public override onCreate(): void {
    super.onCreate();
    const notification = this.createNotification();
    this.startForeground(1, notification);
  }

  public override onTaskRemoved(intent: android.content.Intent) {
    const context = Utils.ad.getApplicationContext() as android.content.Context;
    const restartServiceIntent = new android.content.Intent(context, StepCounterService.class);

    restartServiceIntent.setPackage(context.getPackageName());

    const restartServicePendingIntent = android.app.PendingIntent.getService(this, 1, restartServiceIntent, android.app.PendingIntent.FLAG_ONE_SHOT | android.app.PendingIntent.FLAG_IMMUTABLE);
    const alarmService = context.getSystemService(android.content.Context.ALARM_SERVICE) as android.app.AlarmManager;

    alarmService.set(android.app.AlarmManager.ELAPSED_REALTIME, android.os.SystemClock.elapsedRealtime() + 1000, restartServicePendingIntent);
  }

  private start(): void {
    if (this.isStarted) {
      return;
    }

    this.isStarted = true;
    ApplicationSettings.setString(ServiceStateProperty, ServiceState.Started);

    const context = Utils.ad.getApplicationContext() as android.content.Context;
    const powerManager = context.getSystemService(android.content.Context.POWER_SERVICE) as android.os.PowerManager;

    this.wakeLock = powerManager.newWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, 'StepCounterService::lock');
    this.wakeLock?.acquire();

    this.pedometer = new Pedometer();
    this.database = new CouchBase(DatabaseName);
    this.pedometer
      .startUpdates({
        onUpdate: ({ startDate, endDate, numberOfSteps }) => {
          if (numberOfSteps > 0) {
            this.database.createDocument({
              startDate: startDate.getTime(),
              endDate: endDate.getTime(),
              numberOfSteps: numberOfSteps,
            });
          }
        },
      })
      .catch(() => {
        this.makeToast('Unable to start step counter recorder!');
        this.stop();
      });
  }

  private stop(): void {
    try {
      this.pedometer?.stopUpdates().catch(() => this.makeToast('Unable to stop step counter recorder!'));
      this.database?.close();
      if (this.wakeLock) {
        if (this.wakeLock.isHeld) {
          this.wakeLock.release();
        }
      }
      this.stopForeground(true);
      this.stopSelf();
    } catch (error) {
      console.log(error);
    }
    this.isStarted = false;
    ApplicationSettings.setString(ServiceStateProperty, ServiceState.Stopped);
  }

  private createNotification(): android.app.Notification {
    const notificationChannelId = 'Step Counter';
    const notificationTitle = getNotificationTitle();
    const notificationDescription = getNotificationDescription();
    const context = Utils.ad.getApplicationContext() as android.content.Context;

    const isGoeO = android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O;
    if (isGoeO) {
      const notificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE) as android.app.NotificationManager;
      const channel = new android.app.NotificationChannel(notificationChannelId, notificationDescription, android.app.NotificationManager.IMPORTANCE_HIGH);

      channel.setDescription(notificationDescription);
      channel.enableLights(false);
      channel.enableVibration(false);

      notificationManager.createNotificationChannel(channel);
    }

    const pendingIntent = android.app.PendingIntent.getActivity(context, 0, new android.content.Intent(context, com.tns.NativeScriptActivity.class), android.app.PendingIntent.FLAG_IMMUTABLE);
    const builder = isGoeO ? new android.app.Notification.Builder(context, notificationChannelId) : new android.app.Notification.Builder(context);

    builder.setContentTitle(notificationTitle).setContentText(notificationDescription).setContentIntent(pendingIntent).setSmallIcon(context.getApplicationInfo().icon);

    if (!isGoeO) {
      builder.setPriority(android.app.Notification.PRIORITY_HIGH);
    }

    return builder.build();
  }

  private makeToast(message: string): void {
    const context = Utils.ad.getApplicationContext() as android.content.Context;

    android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show();
  }
}
