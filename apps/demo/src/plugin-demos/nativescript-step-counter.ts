import { EventData, Page, prompt } from '@nativescript/core';
import { DemoSharedNativescriptStepCounter } from '@demo/shared';
import { StepCounter } from '@manojdcoder/nativescript-step-counter';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptStepCounter {
  stepCounter: StepCounter = new StepCounter();

  private _activeUpdates = false;

  private _activeEventUpdates = false;

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

  isAvailable(): void {
    this.stepCounter.isAvailable().then((value) => alert(value ? 'Available' : 'Not available'));
  }

  isAuthorized(): void {
    this.stepCounter.isAuthorized().then((value) => alert(value ? 'Authorized' : 'Not authorized'));
  }

  requestAuthorization(): void {
    this.stepCounter
      .requestAuthorization()
      .then(() => console.log('Permission granted'))
      .catch((err) => console.log(`Permission denied\n${err}`));
  }

  async query(): Promise<void> {
    const data = await prompt('Query steps since?\n In minutes', '10');

    if (data.result) {
      const minutes = parseInt(data.text);

      if (!isNaN(minutes)) {
        const startDate = new Date();
        startDate.setTime(startDate.getTime() - minutes * 60 * 1000);

        try {
          const data = await this.stepCounter.query({ startDate });
          alert(JSON.stringify(data, null, 4));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  async startOrStopUpdates(): Promise<void> {
    try {
      if (this.activeUpdates) {
        await this.stepCounter.stopUpdates();
        this.activeUpdates = false;
      } else {
        await this.stepCounter.startUpdates({
          onUpdate: (data) => {
            console.log(data);
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
        await this.stepCounter.stopEventUpdates();
        this.activeEventUpdates = false;
      } else {
        await this.stepCounter.startEventUpdates({
          onUpdate: (data) => {
            console.log(data);
          },
        });
        this.activeEventUpdates = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
