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
    const startDate = new Date();
    startDate.setUTCHours(0);
    startDate.setUTCMinutes(0);
    startDate.setUTCSeconds(0);
    startDate.setUTCMilliseconds(0);

    const endDate = new Date();
    endDate.setUTCHours(23);
    endDate.setUTCMinutes(59);
    endDate.setUTCSeconds(59);
    endDate.setUTCMilliseconds(0);

    try {
      this.log = await this.fitbit.query(this.authResponse, { startDate, endDate });
    } catch (err) {
      this.log = err;
    }
  }
}
