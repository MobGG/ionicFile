import { Injectable } from '@angular/core';

declare var startApp: any;

@Injectable()
export class StartAppProvider {

  private packageName: string = 'PrintSPC.com.ari';

  constructor() {
    console.log('Hello StartAppProvider Provider');
  }

  launchOtherApp() {
    // setup startApp target
    let appStarter = startApp.set({
      "intentstart": "startActivityForResult",
      "action": "ACTION_MAIN",
      "package": this.packageName,
    });
    appStarter.start((msg) => {
      console.log('starting BB app: ' + msg);
    }, (err) => {
      console.log('BB app not installed', err);
    });
  }

}
