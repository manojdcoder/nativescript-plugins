/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace me {
  export namespace manojdcoder {
    export class GoogleHealth {
      public static class: java.lang.Class<me.manojdcoder.GoogleHealth>;
      public constructor(param0: androidx.appcompat.app.AppCompatActivity, param1: string);
      public isAvailable(param1: boolean): boolean;
      public isAuthorized(param0: kotlin.jvm.functions.Function1): void;
      public requestAuthorization(param0: kotlin.jvm.functions.Function1): void;
      public query(param0: number, param1: number, param2: kotlin.jvm.functions.Function4): void;
    }
    export class PermissionsRationaleActivity {
      public static class: java.lang.Class<me.manojdcoder.PermissionsRationaleActivity>;
      public onBackPressed(): void;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public constructor();
    }
    export namespace PermissionsRationaleActivity {
      export class Companion {
        public static class: java.lang.Class<me.manojdcoder.PermissionsRationaleActivity.Companion>;
        public setAgreementText(param0: string): void;
        public getAgreementText(): string;
      }
    }
    export class StepCounterService {
      public static class: java.lang.Class<me.manojdcoder.StepCounterService>;
      public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
      public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
      public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
      public onTaskRemoved(param0: globalAndroid.content.Intent): void;
      public onCreate(): void;
      public constructor();
      public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
    }
  }
}
