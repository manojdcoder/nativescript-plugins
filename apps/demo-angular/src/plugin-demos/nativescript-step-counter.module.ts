import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptStepCounterComponent } from './nativescript-step-counter.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptStepCounterComponent }])],
  declarations: [NativescriptStepCounterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptStepCounterModule {}
