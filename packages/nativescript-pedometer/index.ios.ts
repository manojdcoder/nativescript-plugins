import { Common, PedometerData, PedometerEventType, PedometerEventUpdatesOptions, PedometerQueryOptions, PedometerUpdatesOptions } from './common';
import { HealthData, HealthDataType } from 'nativescript-health-data';

export class Pedometer extends Common {
  private appleHealthId: string = 'com.apple.Health';
  private dataTypes: Array<HealthDataType> = [
    { name: 'distance', accessType: 'readAndWrite' },
    { name: 'steps', accessType: 'readAndWrite' },
    { name: 'calories', accessType: 'readAndWrite' },
    { name: 'height', accessType: 'readAndWrite' },
    { name: 'weight', accessType: 'readAndWrite' },
    { name: 'heartRate', accessType: 'readAndWrite' },
    { name: 'fatPercentage', accessType: 'readAndWrite' },
  ];

  private mainQueue: NSObject;
  private cmPedometer: CMPedometer;
  private healthData: HealthData;

  constructor(useHealthData: boolean = true) {
    super(useHealthData);
    this.mainQueue = dispatch_get_current_queue();
    if (this.useHealthData) {
      this.healthData = new HealthData();
    } else {
      this.cmPedometer = new CMPedometer();
    }
  }

  isAvailable(): Promise<boolean> {
    return this.useHealthData ? this.healthData.isAvailable() : this.isStepCountingAvailable();
  }

  isStepCountingAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isStepCountingAvailable());
  }

  isDistanceAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isDistanceAvailable());
  }

  isFloorCountingAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isFloorCountingAvailable());
  }

  isPaceAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isPaceAvailable());
  }

  isCadenceAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isCadenceAvailable());
  }

  isEventTrackingAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isPedometerEventTrackingAvailable());
  }

  isAuthorized(): Promise<boolean> {
    if (this.useHealthData) {
      return this.healthData.isAuthorized(this.dataTypes);
    }

    const status = CMPedometer.authorizationStatus();
    const authorized = status === CMAuthorizationStatus.Authorized;
    return Promise.resolve(authorized);
  }

  requestAuthorization(): Promise<void> {
    if (this.useHealthData) {
      return this.healthData.requestAuthorization(this.dataTypes).then(() => undefined);
    }

    return new Promise((resolve, reject) => {
      const status = CMPedometer.authorizationStatus();

      const startDate = new Date();
      startDate.setTime(startDate.getTime() - 24 * 60 * 60 * 1000);

      switch (status) {
        case CMAuthorizationStatus.Restricted:
        case CMAuthorizationStatus.Denied:
          reject();
          break;
        case CMAuthorizationStatus.Authorized:
          resolve();
          break;
        case CMAuthorizationStatus.NotDetermined:
        default:
          this.query({ startDate: startDate })
            .then(() => resolve())
            .catch((error) => reject(error));
      }
    });
  }

  query({ startDate, endDate }: PedometerQueryOptions): Promise<PedometerData> {
    if (this.useHealthData) {
      return Promise.all([this.healthData.query({ startDate, endDate, dataType: 'steps', unit: 'count', aggregateBy: 'sourceAndDay' }), this.healthData.query({ startDate, endDate, dataType: 'calories', unit: 'kcal', aggregateBy: 'sourceAndDay' })]).then((response) => {
        const result: PedometerData = {
          startDate: startDate,
          endDate: endDate,
          numberOfSteps: 0,
          numberOfCalories: 0,
        };

        response[0].forEach((responseItem) => {
          if (responseItem.source !== this.appleHealthId) {
            result.numberOfSteps += responseItem.value;
          }
        });

        response[1].forEach((responseItem) => {
          if (responseItem.source !== this.appleHealthId) {
            result.numberOfCalories += responseItem.value;
          }
        });

        return result;
      });
    }

    return new Promise((resolve, reject) => {
      if (!endDate) {
        endDate = new Date();
      }

      this.cmPedometer.queryPedometerDataFromDateToDateWithHandler(startDate, endDate, (cmPedometerData, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(this.convert(cmPedometerData));
        }
      });
    });
  }

  public startUpdates({ startDate, onUpdate }: PedometerUpdatesOptions): Promise<void> {
    if (!startDate) {
      startDate = new Date();
    }

    if (this.useHealthData) {
      return this.healthData.startMonitoring({
        dataType: 'steps',
        enableBackgroundUpdates: true,
        backgroundUpdateFrequency: 'immediate',
        onUpdate: (completionHandler: () => void) => {
          dispatch_async(this.mainQueue, () => {
            this.query({ startDate: startDate, endDate: new Date() })
              .then((result) => onUpdate(result))
              .then(() => completionHandler());
          });
        },
      });
    }

    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.startPedometerUpdatesFromDateWithHandler(startDate, (cmPedometerData, error) => {
          dispatch_async(this.mainQueue, () => {
            if (error) {
              reject(error);
            } else {
              onUpdate(this.convert(cmPedometerData));
            }
          });
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public stopUpdates(): Promise<void> {
    if (this.useHealthData) {
      return this.healthData.stopMonitoring({
        dataType: 'steps',
      });
    }

    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.stopPedometerUpdates();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public startEventUpdates({ onUpdate }: PedometerEventUpdatesOptions): Promise<void> {
    if (this.useHealthData) {
      return Promise.reject('Not implemented!');
    }

    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.startPedometerEventUpdatesWithHandler((cmPedometerEvent, error) => {
          dispatch_async(this.mainQueue, () => {
            if (error) {
              reject(error);
            } else {
              onUpdate({
                type: cmPedometerEvent.type === CMPedometerEventType.Pause ? PedometerEventType.Pause : PedometerEventType.Resume,
                date: cmPedometerEvent.date,
              });
            }
          });
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public stopEventUpdates(): Promise<void> {
    if (this.useHealthData) {
      return Promise.reject('Not implemented!');
    }

    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.stopPedometerEventUpdates();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private convert(data: CMPedometerData): PedometerData {
    return {
      startDate: data.startDate,
      endDate: data.endDate,
      numberOfSteps: data.numberOfSteps,
      distance: data.distance,
      floorsAscended: data.floorsAscended,
      floorsDescended: data.floorsDescended,
      currentPace: data.currentPace,
      currentCadence: data.currentCadence,
      averageActivePace: data.averageActivePace,
    };
  }
}
