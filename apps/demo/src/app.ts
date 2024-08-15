import { Application } from '@nativescript/core';
import { init } from '@manojdcoder/nativescript-pedometer/google-health';

Application.android.on(Application.android.activityCreatedEvent, () => init());
Application.run({ moduleName: 'app-root' });
