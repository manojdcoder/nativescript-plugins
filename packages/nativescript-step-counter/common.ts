import { Observable } from '@nativescript/core';

export abstract class StepCounterCommon extends Observable {
  abstract isAvailable(): Promise<boolean>;
  abstract isAuthorized(): Promise<boolean>;
  abstract requestAuthorization(): Promise<void>;
  abstract query(from: Date, to: Date): Promise<number>;
}
