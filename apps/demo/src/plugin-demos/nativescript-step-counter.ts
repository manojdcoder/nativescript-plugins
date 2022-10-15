import { EventData, Page, prompt } from '@nativescript/core';
import { DemoSharedNativescriptStepCounter } from '@demo/shared';
import { StepCounter } from '@manojdcoder/nativescript-step-counter';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptStepCounter {
  stepCounter: StepCounter = new StepCounter();

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
        const from = new Date();
        from.setTime(from.getTime() - minutes * 60 * 1000);

        try {
          const numberOfSteps = await this.stepCounter.query(new Date(), new Date());
          alert(`Number of steps: ${numberOfSteps}`);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
}
