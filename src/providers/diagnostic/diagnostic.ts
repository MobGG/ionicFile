import { Injectable } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic';
import { FilesProvider } from '../../providers/files/files';

@Injectable()
export class DiagnosticProvider {
  bluetoothIsEnabled: boolean;
  constructor(
    public diagnostic: Diagnostic,
    public files: FilesProvider,
  ) {

  }

  checkBluetooth() {
    this.diagnostic.isBluetoothEnabled()
      .then(enabled => {
        if (enabled) {
          // bluetooth already on
          console.log('bluetooth already on ' + enabled);
        } else {
          // bluetooth off
          console.log('bluetooth off');
        }
      })
      .catch(error => {
        console.error("The following error occurred: " + error);
      });
  }

  getBluetoothState() {
    this.diagnostic.getBluetoothState()
      .then(res => {
        console.log(res);
        // this.files.removeFile();
      }).catch(err => {
        console.warn(err);
      })
  }

  enableBluetooth() {
    this.diagnostic.setBluetoothState(true)
      .then(res => {
        console.log('bluetooth state:', res);
      })
      .catch(err => {
        console.error("error:" + err);
      });
  }

  disableBluetooth() {
    this.diagnostic.setBluetoothState(false)
      .then(res => {
        console.log('bluetooth state:', res);
      })
      .catch(err => {
        console.error("error:" + err);
      });
  }

  listennerBluetoothStatus() {
    // this.diagnostic.registerBluetoothStateChangeHandler(state => {
    this.diagnostic.registerBluetoothStateChangeHandler(function (state) {
      let status: boolean;
      if (state === 'powered_on') {
        // status = true;
        // alert('bluetoothIsEnabled is ' + status);
      } else if (state === 'powered_off') {
        // status = false;
        // alert('bluetoothIsEnabled is ' + status);

        // this.testAlert();
        // this.testRemoveFile();

        // this.files.removeFile();
        this.files.writeEmpty();
      }
      // });
    }.bind(this));
  }

  testAlert() {
    alert('Test outside function!');
  }

  testRemoveFile() {
    this.files.removeFile();
  }

}
