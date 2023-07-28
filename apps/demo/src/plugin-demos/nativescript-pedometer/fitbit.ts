import { EventData, Page, prompt } from '@nativescript/core';
import { DemoSharedNativescriptPedometer } from '@demo/shared';
import { Fitbit, IAuthResponse } from '@manojdcoder/nativescript-pedometer/fitbit';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new FitbitModel();
}

export class FitbitModel extends DemoSharedNativescriptPedometer {
  fitbit: Fitbit = new Fitbit();

  private authResponse?: IAuthResponse;

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

  async connect() {
    try {
      this.authResponse = await this.fitbit.connect('23R3HH', 'https://to-do-90cf7.web.app/fitbit-callback.html');
      this.notifyPropertyChange('authResponse', this.authResponse);
    } catch (err) {
      alert('Failed to connect');
    }
  }

  async query() {
    const data = await prompt('Query steps since?\n In minutes', '0.5');

    if (data.result) {
      const minutes = parseFloat(data.text);

      if (!isNaN(minutes)) {
        const startDate = new Date();
        startDate.setTime(startDate.getTime() - minutes * 60 * 1000);

        try {
          this.log = await this.fitbit.query(this.authResponse, { startDate });
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
}
