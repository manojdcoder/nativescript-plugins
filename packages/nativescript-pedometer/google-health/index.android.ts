import { Utils } from '@nativescript/core';
import { PedometerData, PedometerQueryOptions } from '../common';

let instance: me.manojdcoder.GoogleHealth;
let defaultProviderPackageName = 'com.google.android.apps.healthdata';

export function init(providerPackageName?: string) {
  defaultProviderPackageName = providerPackageName ?? defaultProviderPackageName;
  instance = new me.manojdcoder.GoogleHealth(Utils.android.getCurrentActivity(), defaultProviderPackageName);
}

export function isAvailable(redirect = true): Promise<boolean> {
  return Promise.resolve(instance.isAvailable(redirect));
}

export function isAuthorized(): Promise<boolean> {
  return new Promise((resolve) => {
    instance.isAuthorized(new kotlin.jvm.functions.Function1({ invoke: resolve }));
  });
}

export function requestAuthorization(): Promise<boolean> {
  return new Promise((resolve) => {
    instance.requestAuthorization(new kotlin.jvm.functions.Function1({ invoke: resolve }));
  });
}

export function query(options: PedometerQueryOptions): Promise<PedometerData> {
  // eslint-disable-next-line prefer-const
  let { startDate, endDate } = options;
  if (!endDate) {
    endDate = new Date();
  }

  return new Promise((resolve, reject) => {
    instance.query(
      startDate.getTime(),
      endDate.getTime(),
      new kotlin.jvm.functions.Function4({
        invoke: (error: string | null, numberOfSteps: number, totalCalories: number, activeCalories: number) => {
          if (error == null) {
            resolve({
              startDate: startDate,
              endDate: endDate,
              numberOfSteps: numberOfSteps,
              numberOfCalories: totalCalories,
            });
          } else {
            reject(error);
          }
        },
      })
    );
  });
}