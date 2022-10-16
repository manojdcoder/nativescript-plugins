import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPedometer } from '@demo/shared';
import {} from '@manojdcoder/nativescript-pedometer';

@Component({
  selector: 'demo-nativescript-pedometer',
  templateUrl: 'nativescript-pedometer.component.html',
})
export class NativescriptPedometerComponent {
  demoShared: DemoSharedNativescriptPedometer;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptPedometer();
  }
}
