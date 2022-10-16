import { PedometerData, PedometerEventType, PedometerEventUpdatesOptions, PedometerQueryOptions, PedometerUpdatesOptions, Common } from './common';

export class Pedometer extends Common {
  private cmPedometer: CMPedometer = new CMPedometer();

  isAvailable(): Promise<boolean> {
    return this.isStepCountingAvailable();
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
    const status = CMPedometer.authorizationStatus();
    const authorized = status === CMAuthorizationStatus.Authorized;
    return Promise.resolve(authorized);
  }

  requestAuthorization(): Promise<void> {
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
    return new Promise((resolve, reject) => {
      try {
        if (!startDate) {
          startDate = new Date();
        }

        this.cmPedometer.startPedometerUpdatesFromDateWithHandler(startDate, (cmPedometerData, error) => {
          if (error) {
            reject(error);
          } else {
            onUpdate(this.convert(cmPedometerData));
          }
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public stopUpdates(): Promise<void> {
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
    return new Promise((resolve, reject) => {
      try {
        this.cmPedometer.startPedometerEventUpdatesWithHandler((cmPedometerEvent, error) => {
          if (error) {
            reject(error);
          } else {
            onUpdate({
              type: cmPedometerEvent.type === CMPedometerEventType.Pause ? PedometerEventType.Pause : PedometerEventType.Resume,
              date: cmPedometerEvent.date,
            });
          }
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  public stopEventUpdates(): Promise<void> {
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
