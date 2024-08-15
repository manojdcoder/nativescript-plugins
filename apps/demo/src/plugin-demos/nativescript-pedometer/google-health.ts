import { EventData, Page, prompt } from '@nativescript/core';
import { DemoSharedNativescriptPedometer } from '@demo/shared';
import { isAvailable, isAuthorized, requestAuthorization, query } from '@manojdcoder/nativescript-pedometer/google-health';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new GoogleHealthModel();
}

export class GoogleHealthModel extends DemoSharedNativescriptPedometer {
  private _log = '';

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
    isAvailable().then((value) => alert(value ? 'Available' : 'Not available'));
  }

  isAuthorized(): void {
    isAuthorized().then((value) => alert(value ? 'Authorized' : 'Not authorized'));
  }

  requestAuthorization(): void {
    requestAuthorization()
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
          this.log = await query({ startDate });
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
}
