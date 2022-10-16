import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPedometerComponent } from './nativescript-pedometer.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPedometerComponent }])],
  declarations: [NativescriptPedometerComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPedometerModule {}
