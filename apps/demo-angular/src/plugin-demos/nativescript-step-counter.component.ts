import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptStepCounter } from '@demo/shared';
import {} from '@manojdcoder/nativescript-step-counter';

@Component({
  selector: 'demo-nativescript-step-counter',
  templateUrl: 'nativescript-step-counter.component.html',
})
export class NativescriptStepCounterComponent {
  demoShared: DemoSharedNativescriptStepCounter;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptStepCounter();
  }
}
