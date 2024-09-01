package me.manojdcoder;

import android.annotation.SuppressLint;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.pm.ServiceInfo;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;
import android.os.SystemClock;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.couchbase.lite.ConcurrencyControl;
import com.couchbase.lite.CouchbaseLite;
import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;
import com.couchbase.lite.MutableDocument;

import java.util.Collections;
import java.util.Date;
import java.util.List;

public class StepCounterService extends Service implements SensorEventListener {
  private boolean isStarted = false;
  private float startSteps = 0f;

  private PowerManager.WakeLock wakeLock;
  private SensorManager sensorManager;
  private Date startDate;

  @RequiresApi(api = Build.VERSION_CODES.UPSIDE_DOWN_CAKE)
  protected int findForegroundServiceType() {
    return ServiceInfo.FOREGROUND_SERVICE_TYPE_HEALTH;
  }

  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    if (intent != null) {
      String action = intent.getAction();

      switch (action) {
        case "Start":
          startService();
          break;
        case "Stop":
          stopService();
          break;
      }
    }

    return START_STICKY;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    boolean state = true;
    CouchbaseLite.init(getApplicationContext());
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
      try {
        startForeground(1, createNotification(), findForegroundServiceType());
      } catch (IllegalArgumentException ignored) {
        state = false;
      }
    } else {
      startForeground(1, createNotification());
    }

    Intent intent = new Intent("StepCounterService.State");
    intent.putExtra("state", state);
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
      intent.putExtra("foregroundServiceType", findForegroundServiceType());
    }
    LocalBroadcastManager.getInstance(getApplicationContext()).sendBroadcast(intent);
  }

  @Override
  public void onTaskRemoved(Intent rootIntent) {
    Intent restartServiceIntent = new Intent(this, getClass());
    restartServiceIntent.setAction("Start");
    restartServiceIntent.setPackage(getPackageName());

    PendingIntent restartServicePendingIntent = PendingIntent.getService(
      this,
      1,
      restartServiceIntent,
      PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE
    );
    AlarmManager alarmService = (AlarmManager) getSystemService(ALARM_SERVICE);

    alarmService.set(AlarmManager.ELAPSED_REALTIME, SystemClock.elapsedRealtime() + 1000, restartServicePendingIntent);
  }

  @Override
  public void onSensorChanged(SensorEvent sensorEvent) {
    if (sensorEvent.sensor.getType() == Sensor.TYPE_STEP_COUNTER) {
      float eventSteps = sensorEvent.values[0];

      if (startSteps == 0) {
        startSteps = eventSteps;
      } else {
        float numberOfSteps = eventSteps - startSteps;

        startSteps = eventSteps;

        try {
          DatabaseConfiguration databaseConfiguration = new DatabaseConfiguration();
          Database database = new Database("step-counter", databaseConfiguration);
          MutableDocument document = new MutableDocument();
          document.setNumber("startDate", startDate.getTime());
          document.setNumber("endDate", new Date().getTime());
          document.setNumber("numberOfSteps", numberOfSteps);
          database.save(document, ConcurrencyControl.LAST_WRITE_WINS);
          database.close();
        } catch (CouchbaseLiteException e) {
          e.printStackTrace();
        }

        startDate = new Date();
      }
    }
  }

  @Override
  public void onAccuracyChanged(Sensor sensor, int i) {

  }

  @SuppressLint("WakelockTimeout")
  private void startService() {
    if (isStarted) {
      return;
    }

    isStarted = true;

    SharedPreferences.Editor editor = getSharedPreferences().edit();
    editor.putString("StepCounterServiceState", "Started");
    editor.apply();

    PowerManager powerManager = (PowerManager) getSystemService(POWER_SERVICE);
    wakeLock = powerManager.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "PedometerForegroundService::lock");
    if( wakeLock != null ) wakeLock.acquire();

    startSteps = 0;
    startDate = new Date();

    sensorManager = (SensorManager) getSystemService(SENSOR_SERVICE);
    Sensor sensor = sensorManager.getSensorList(Sensor.TYPE_STEP_COUNTER).get(0);
    sensorManager.registerListener(this, sensor, SensorManager.SENSOR_DELAY_NORMAL);
  }

  private void stopService() {
    try {
      if (sensorManager != null) sensorManager.unregisterListener(this);
      if (wakeLock != null && wakeLock.isHeld()) wakeLock.release();
      stopForeground(true);
      stopSelf();
    } catch (Exception e) {
      e.printStackTrace();
    }

    isStarted = false;

    SharedPreferences.Editor editor = getSharedPreferences().edit();
    editor.putString("StepCounterServiceState", "Stopped");
    editor.apply();
  }

  private Notification createNotification() {
    String notificationChannelId = "Step Counter";
    String notificationTitle = getSharedPreferences().getString("StepCounterNotificationTitle", "Step Counter");
    String notificationDescription = getSharedPreferences().getString("StepCounterNotificationDescription", "Recording the step counts.");

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationManager notificationManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
      NotificationChannel channel = new NotificationChannel(notificationChannelId, notificationTitle, NotificationManager.IMPORTANCE_HIGH);

      channel.setDescription(notificationDescription);
      channel.enableLights(false);
      channel.enableVibration(false);

      notificationManager.createNotificationChannel(channel);
    }

    PackageManager packageManager = getPackageManager();
    Intent mainIntent = new Intent(Intent.ACTION_MAIN, null);
    mainIntent.addCategory(Intent.CATEGORY_LAUNCHER);

    @SuppressLint("QueryPermissionsNeeded") List<ResolveInfo> appList = packageManager.queryIntentActivities(mainIntent, 0);
    Collections.sort(appList, new ResolveInfo.DisplayNameComparator(packageManager));

    PendingIntent pendingIntent = PendingIntent.getActivity(
      this,
      0,
      new Intent(this, appList.get(0).activityInfo.getClass()),
      Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE : PendingIntent.FLAG_ONE_SHOT
    );
    Notification.Builder builder = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O ?
      new Notification.Builder(this, notificationChannelId) :
      new Notification.Builder(this);

    builder.setContentTitle(notificationTitle)
      .setContentText(notificationDescription)
      .setContentIntent(pendingIntent)
      .setSmallIcon(getApplicationInfo().icon);

    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
      builder.setPriority(Notification.PRIORITY_HIGH);
    }

    return builder.build();
  }

  private SharedPreferences getSharedPreferences() {
    return getSharedPreferences("prefs.db", 0);
  }
}
