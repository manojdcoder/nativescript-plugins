import { Common, PedometerData, PedometerEventType, PedometerEventUpdatesOptions, PedometerQueryOptions, PedometerUpdatesOptions } from './common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { HealthDataType } from 'nativescript-health-data';

export function openUrl(location: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const url = NSURL.URLWithString(location.trim());
      if (UIApplication.sharedApplication.canOpenURL(url)) {
        UIApplication.sharedApplication.openURLOptionsCompletionHandler(url, null, (result) => resolve(result));
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
}

export class Pedometer extends Common {
  protected manualSourceId = 'com.apple.Health';

  private mainQueue: NSObject & OS_dispatch_queue;
  private cmPedometer: CMPedometer;

  constructor(useHealthData = true) {
    super(useHealthData);
    this.mainQueue = dispatch_get_current_queue();
    if (!this.useHealthData) {
      this.cmPedometer = new CMPedometer();
    }
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

  isAuthorized(types?: Array<HealthDataType>): Promise<boolean> {
    if (this.useHealthData) {
      return super.isAuthorized(types);
    }

    const status = CMPedometer.authorizationStatus();
    const authorized = status === CMAuthorizationStatus.Authorized;
    return Promise.resolve(authorized);
  }

  requestAuthorization(types?: Array<HealthDataType>): Promise<void> {
    if (this.useHealthData) {
      return super.requestAuthorization(types);
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

  query(options: PedometerQueryOptions): Promise<PedometerData> {
    if (this.useHealthData) {
      return super.query(options);
    }

    // eslint-disable-next-line prefer-const
    let { startDate, endDate } = options;
    if (!endDate) {
      endDate = new Date();
    }

    return new Promise((resolve, reject) => {
      this.cmPedometer.queryPedometerDataFromDateToDateWithHandler(startDate, endDate, (cmPedometerData, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(this.convert(cmPedometerData));
        }
      });
    });
  }

  public startUpdates(options: PedometerUpdatesOptions): Promise<void> {
    if (this.useHealthData) {
      return super.startUpdates(options);
    }

    // eslint-disable-next-line prefer-const
    let { startDate, onUpdate } = options;
    if (!startDate) {
      startDate = new Date();
    }

    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.startPedometerUpdatesFromDateWithHandler(startDate, (cmPedometerData, error) => {
          this.runOnMainThread(() => {
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
      super.stopUpdates();
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

  protected runOnMainThread(callback: () => void) {
    dispatch_async(this.mainQueue, callback);
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
