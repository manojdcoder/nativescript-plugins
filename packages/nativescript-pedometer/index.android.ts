import { Utils } from '@nativescript/core';
import { hasPermission, requestPermission } from 'nativescript-permissions';
import { CouchBase } from '@triniwiz/nativescript-couchbase';
import { Common, PedometerData, PedometerQueryOptions, PedometerUpdatesOptions } from './common';

enum State {
  Starting,
  Started,
  Error,
  Stopped,
}

export class Pedometer extends Common {
  private databaseName = 'step-counter';
  private startSteps = 0;
  private startDate: Date = new Date();

  private sensorManager: android.hardware.SensorManager;
  private sensor?: android.hardware.Sensor;
  private sensorEventListener?: android.hardware.SensorEventListener;
  private state?: State;

  constructor() {
    super();
    const context = Utils.ad.getApplicationContext() as android.content.Context;
    this.sensorManager = context.getSystemService(android.content.Context.SENSOR_SERVICE) as android.hardware.SensorManager;
  }

  isAvailable(): Promise<boolean> {
    return this.isStepCountingAvailable();
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

  isAuthorized(): Promise<boolean> {
    return Promise.resolve(hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION));
  }

  requestAuthorization(): Promise<void> {
    return requestPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
  }

  query({ startDate, endDate }: PedometerQueryOptions): Promise<PedometerData> {
    return new Promise((resolve) => {
      if (!endDate) {
        endDate = new Date();
      }

      const database = new CouchBase(this.databaseName);
      const items = database.query({
        select: [],
        where: [
          { property: 'startDate', comparison: 'greaterThanOrEqualTo', value: startDate.getTime() },
          { property: 'endDate', comparison: 'lessThanOrEqualTo', value: endDate.getTime() },
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

  public startUpdates({ onUpdate }: PedometerUpdatesOptions): Promise<void> {
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

                let numberOfSteps = sensorEvent.values[0];

                if (this.startSteps === 0) {
                  this.startSteps = numberOfSteps;
                }

                numberOfSteps = numberOfSteps - this.startSteps;

                onUpdate({
                  startDate: this.startDate,
                  endDate: new Date(),
                  numberOfSteps: numberOfSteps,
                });

                this.startDate = new Date();
              }
            },
            onAccuracyChanged: () => {
              // Nothing to do here!
            },
          });

          if (this.sensorManager.registerListener(this.sensorEventListener, this.sensor, android.hardware.SensorManager.SENSOR_DELAY_UI)) {
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

  private getSensorList(): java.util.List<android.hardware.Sensor> {
    return this.sensorManager.getSensorList(android.hardware.Sensor.TYPE_STEP_COUNTER);
  }
}
