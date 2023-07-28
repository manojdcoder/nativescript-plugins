import { Observable, Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
  viewDemo(args) {
    let path = args.object.text;
    switch (args.object.text) {
      case 'nativescript-pedometer':
        path = `${path}/index`;
        break;
    }
    Frame.topmost().navigate({
      moduleName: `plugin-demos/${path}`,
    });
  }
}
