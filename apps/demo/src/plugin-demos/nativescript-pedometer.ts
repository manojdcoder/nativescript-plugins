import { EventData, Page, prompt } from '@nativescript/core';
import { DemoSharedNativescriptPedometer } from '@demo/shared';
import { Pedometer } from '@manojdcoder/nativescript-pedometer';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPedometer {
  pedometer: Pedometer = new Pedometer();

  private _activeUpdates = false;

  private _activeEventUpdates = false;

  private _log = '';

  get activeUpdates(): boolean {
    return this._activeUpdates;
  }

  set activeUpdates(value: boolean) {
    if (this._activeUpdates !== value) {
      this._activeUpdates = value;
      this.notifyPropertyChange('activeUpdates', value);
    }
  }

  get activeEventUpdates(): boolean {
    return this._activeEventUpdates;
  }

  set activeEventUpdates(value: boolean) {
    if (this._activeEventUpdates !== value) {
      this._activeEventUpdates = value;
      this.notifyPropertyChange('activeEventUpdates', value);
    }
  }

  get log(): string {
    return this._log;
  }

  set log(value: object | string) {
    if (value !== null && typeof value === 'object') {
      value = JSON.stringify(value, null, 4);
    }
    if (this._log !== value) {
      this._log = value as string;
      this.notifyPropertyChange('log', value);
    }
  }

  isAvailable(): void {
    this.pedometer.isAvailable().then((value) => alert(value ? 'Available' : 'Not available'));
  }

  isAuthorized(): void {
    this.pedometer.isAuthorized().then((value) => alert(value ? 'Authorized' : 'Not authorized'));
  }

  requestAuthorization(): void {
    this.pedometer
      .requestAuthorization()
      .then(() => alert('Permission granted'))
      .catch((error) => {
        alert('Permission denied');
        console.log(error);
      });
  }

  async query(): Promise<void> {
    const data = await prompt('Query steps since?\n In minutes', '0.5');

    if (data.result) {
      const minutes = parseFloat(data.text);

      if (!isNaN(minutes)) {
        const startDate = new Date();
        startDate.setTime(startDate.getTime() - minutes * 60 * 1000);

        try {
          this.log = await this.pedometer.query({ startDate });
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  async startOrStopUpdates(): Promise<void> {
    try {
      if (this.activeUpdates) {
        await this.pedometer.stopUpdates();
        this.activeUpdates = false;
      } else {
        await this.pedometer.startUpdates({
          onUpdate: (data) => {
            this.log = data;
          },
        });
        this.activeUpdates = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async startOrStopEventUpdates(): Promise<void> {
    try {
      if (this.activeEventUpdates) {
        await this.pedometer.stopEventUpdates();
        this.activeEventUpdates = false;
      } else {
        await this.pedometer.startEventUpdates({
          onUpdate: (data) => {
            this.log = data;
          },
        });
        this.activeEventUpdates = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
