import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptStepCounter } from '@demo/shared';
import {} from '@manojdcoder/nativescript-step-counter';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptStepCounter {}
