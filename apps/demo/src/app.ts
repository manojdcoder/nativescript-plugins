import { Application, isAndroid } from '@nativescript/core';
import { init } from '@manojdcoder/nativescript-pedometer/google-health';

if (isAndroid) {
  Application.android.on(Application.android.activityCreatedEvent, () => init());
}

Application.run({ moduleName: 'app-root' });
