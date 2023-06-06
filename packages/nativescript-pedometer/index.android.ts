import { ApplicationSettings, Utils } from '@nativescript/core';
import { hasPermission, requestPermission } from 'nativescript-permissions';
import { CouchBase, QueryLogicalOperator } from '@triniwiz/nativescript-couchbase';
import { Common, DatabaseName, PedometerData, PedometerQueryOptions, PedometerUpdatesOptions, ServiceAction, ServiceState, ServiceStateProperty } from './common';
import { HealthDataType } from 'nativescript-health-data';

enum State {
  Starting,
  Started,
  Error,
  Stopped,
}

export class Pedometer extends Common {
  protected manualSourceId: string = 'com.google.android.apps.fitness';

  private startSteps = 0;
  private startDate: Date = new Date();

  private sensorManager: android.hardware.SensorManager;
  private sensor?: android.hardware.Sensor;
  private sensorEventListener?: android.hardware.SensorEventListener;
  private state?: State;

  constructor() {
    super();
    if (!this.useHealthData) {
      const context = Utils.ad.getApplicationContext() as android.content.Context;
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

    let { startDate, endDate } = options;
    if (!endDate) {
      endDate = new Date();
    }

    return new Promise((resolve, reject) => {
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
    this.invokeService(ServiceAction.Start);
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
    const context = Utils.ad.getApplicationContext() as android.content.Context;
    const intent = new android.content.Intent(context, me.manojdcoder.StepCounterService.class);

    intent.setAction(action);
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
      context.startForegroundService(intent);
    } else {
      context.startService(intent);
    }
  }
}
