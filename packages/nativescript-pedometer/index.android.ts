import { ApplicationSettings, Utils, Application } from '@nativescript/core';
import { hasPermission, hasPermissions, requestPermission, requestPermissions } from 'nativescript-permissions';
import { CouchBase, QueryLogicalOperator } from '@triniwiz/nativescript-couchbase';
import { Common, DatabaseName, PedometerData, PedometerQueryOptions, PedometerUpdatesOptions, ServiceAction, ServiceState, ServiceStateProperty } from './common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HealthDataType } from 'nativescript-health-data';

export function openUrl(url: string): Promise<boolean> {
  return Promise.resolve(Utils.openUrl(url));
}

enum State {
  Starting,
  Started,
  Error,
  Stopped,
}

export class Pedometer extends Common {
  protected manualSourceId = 'com.google.android.apps.fitness';

  private receiver: StepCounterStateBroadcastReceiver;
  private startSteps = 0;
  private startDate: Date = new Date();

  private sensorManager: android.hardware.SensorManager;
  private sensor?: android.hardware.Sensor;
  private sensorEventListener?: android.hardware.SensorEventListener;
  private state?: State;

  constructor(useHealthData = true) {
    super(useHealthData);
    if (!this.useHealthData) {
      const context = Utils.android.getApplicationContext() as android.content.Context;
      this.sensorManager = context.getSystemService(android.content.Context.SENSOR_SERVICE) as android.hardware.SensorManager;
    }
  }

  isStepCountingAvailable(): Promise<boolean> {
    return Promise.resolve(this.getSensorList().size() > 0);
  }

  isDistanceAvailable(): Promise<boolean> {
    return Promise.resolve(false);
  }

  isFloorCountingAvailable(): Promise<boolean> {
    return Promise.resolve(false);
  }

  isPaceAvailable(): Promise<boolean> {
    return Promise.resolve(false);
  }

  isCadenceAvailable(): Promise<boolean> {
    return Promise.resolve(false);
  }

  isEventTrackingAvailable(): Promise<boolean> {
    return Promise.resolve(false);
  }

  isAuthorized(types?: Array<HealthDataType>): Promise<boolean> {
    if (this.useHealthData) {
      return super.isAuthorized(types);
    }

    return Promise.resolve(hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION));
  }

  requestAuthorization(types?: Array<HealthDataType>): Promise<void> {
    if (this.useHealthData) {
      return super.requestAuthorization(types);
    }

    return requestPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
  }

  query(options: PedometerQueryOptions): Promise<PedometerData> {
    if (this.useHealthData) {
      return super.query(options);
    }

    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = options;
    if (!endDate) {
      endDate = new Date();
    }

    return new Promise((resolve) => {
      const database = new CouchBase(DatabaseName);
      const items = database.query({
        select: [],
        where: [
          { property: 'startDate', comparison: 'greaterThanOrEqualTo', value: startDate.getTime() },
          { property: 'endDate', comparison: 'lessThanOrEqualTo', value: endDate.getTime(), logical: QueryLogicalOperator.AND },
        ],
      });
      database.close();
      const numberOfSteps = items.reduce((prevValue, item) => prevValue + item.numberOfSteps, 0);

      resolve({
        startDate: startDate,
        endDate: endDate,
        numberOfSteps: numberOfSteps,
      });
    });
  }

  public startUpdates(options: PedometerUpdatesOptions): Promise<void> {
    if (this.useHealthData) {
      return super.startUpdates(options);
    }

    const { onUpdate } = options;
    return new Promise((resolve, reject) => {
      try {
        const sensors = this.getSensorList();

        if (sensors.size() > 0) {
          this.sensor = sensors.get(0);
          this.startSteps = 0;
          this.startDate = new Date();
          this.sensorEventListener = new android.hardware.SensorEventListener({
            onSensorChanged: (sensorEvent) => {
              if (sensorEvent.sensor.getType() === android.hardware.Sensor.TYPE_STEP_COUNTER) {
                if (this.state === State.Stopped) {
                  return;
                }

                this.state = State.Started;

                const eventSteps = sensorEvent.values[0];

                if (this.startSteps === 0) {
                  this.startSteps = eventSteps;
                } else {
                  const numberOfSteps = eventSteps - this.startSteps;

                  this.startSteps = eventSteps;
                  onUpdate({
                    startDate: this.startDate,
                    endDate: new Date(),
                    numberOfSteps: numberOfSteps,
                  });
                  this.startDate = new Date();
                }
              }
            },
            onAccuracyChanged: () => {
              // Nothing to do here!
            },
          });

          if (this.sensorManager.registerListener(this.sensorEventListener, this.sensor, android.hardware.SensorManager.SENSOR_DELAY_NORMAL)) {
            this.state = State.Starting;
            resolve();
          } else {
            this.state = State.Error;
            reject('Failed to start!');
          }
        } else {
          this.state = State.Error;
          reject('Step counter sensor not found!');
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  public stopUpdates(): Promise<void> {
    if (this.useHealthData) {
      super.stopUpdates();
    }

    return new Promise((resolve, reject) => {
      try {
        if (this.sensorEventListener) {
          this.sensorManager.unregisterListener(this.sensorEventListener);
          this.state = State.Stopped;
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  isRecording(): boolean {
    return ApplicationSettings.getString(ServiceStateProperty, ServiceState.Stopped) === ServiceState.Started;
  }

  startRecording(): void {
    if (!this.receiver) {
      this.receiver = new StepCounterStateBroadcastReceiver((context, intent) => {
        if (intent.getIntExtra('foregroundServiceType', 0) === 256 && !intent.getBooleanExtra('state', false)) {
          this.startRecordingAsLocation();
        }
      });
      const intentFilter = new android.content.IntentFilter('StepCounterService.State');
      androidx.localbroadcastmanager.content.LocalBroadcastManager.getInstance(Utils.android.getApplicationContext()).registerReceiver(this.receiver, intentFilter);
    }
    this.invokeService(ServiceAction.Start);
  }

  async startRecordingAsLocation(): Promise<void> {
    const permissions = [android.Manifest.permission.ACCESS_COARSE_LOCATION, android.Manifest.permission.ACCESS_FINE_LOCATION];

    if (hasPermissions(permissions).success !== permissions.length) {
      await requestPermissions([android.Manifest.permission.ACCESS_COARSE_LOCATION, android.Manifest.permission.ACCESS_FINE_LOCATION]);
    }

    if (hasPermissions(permissions).success === permissions.length) {
      this.invokeService(ServiceAction.Start);
    }
  }

  stopRecording(): void {
    this.invokeService(ServiceAction.Stop);
  }

  protected runOnMainThread(callback: () => void) {
    Promise.resolve(callback).catch((err) => console.log(err));
  }

  private getSensorList(): java.util.List<android.hardware.Sensor> {
    return this.sensorManager.getSensorList(android.hardware.Sensor.TYPE_STEP_COUNTER);
  }

  private invokeService(action: ServiceAction): void {
    const context = Utils.android.getApplicationContext() as android.content.Context;
    const intent = new android.content.Intent(context, hasPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) ? me.manojdcoder.StepCounterAsLocationService.class : me.manojdcoder.StepCounterService.class);

    intent.setAction(action);
    context.startForegroundService(intent);
  }
}

@NativeClass()
class StepCounterStateBroadcastReceiver extends android.content.BroadcastReceiver {
  private onReceivedCallback: (context: globalAndroid.content.Context, intent: globalAndroid.content.Intent) => void;

  constructor(onReceivedCallback: (context: globalAndroid.content.Context, intent: globalAndroid.content.Intent) => void) {
    super();
    this.onReceivedCallback = onReceivedCallback;
    return global.__native(this);
  }

  public override onReceive(context: globalAndroid.content.Context, intent: globalAndroid.content.Intent): void {
    this.onReceivedCallback(context, intent);
  }
}
