import { PedometerData } from '../common';

export function init() {
  // Not implemented
}

export function isAvailable(): Promise<boolean> {
  return Promise.resolve(false);
}

export function isAuthorized(): Promise<boolean> {
  return Promise.resolve(false);
}

export function requestAuthorization(): Promise<void> {
  return Promise.reject();
}

export function query(): Promise<PedometerData> {
  return Promise.resolve(null);
}
