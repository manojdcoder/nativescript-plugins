import { StepCounterCommon } from './common';

export class StepCounter extends StepCounterCommon {
  private pedometer: CMPedometer = new CMPedometer();

  isAvailable(): Promise<boolean> {
    return Promise.resolve(CMPedometer.isStepCountingAvailable());
  }

  isAuthorized(): Promise<boolean> {
    const status = CMPedometer.authorizationStatus();
    const authorized = status === CMAuthorizationStatus.Authorized;
    return Promise.resolve(authorized);
  }

  requestAuthorization(): Promise<void> {
    return new Promise((resolve, reject) => {
      const status = CMPedometer.authorizationStatus();

      const from = new Date();
      from.setTime(from.getTime() - 24 * 60 * 60 * 1000);

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
          this.query(from, new Date())
            .then(() => resolve())
            .catch((error) => reject(error));
      }
    });
  }

  query(from: Date, to: Date): Promise<number> {
    return new Promise((resolve, reject) => {
      this.pedometer.queryPedometerDataFromDateToDateWithHandler(from, to, (data: CMPedometerData, error: NSError) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.numberOfSteps);
        }
      });
    });
  }
}
