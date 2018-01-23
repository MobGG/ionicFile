import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { FilesProvider } from '../../providers/files/files';
import { DiagnosticProvider } from '../../providers/diagnostic/diagnostic';
import { StartAppProvider } from '../../providers/start-app/start-app';

@IonicPage()
@Component({
  selector: 'page-file',
  templateUrl: 'file.html',
})
export class FilePage {
  browser: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private file: FilesProvider,
    private diagnostic: DiagnosticProvider,
    private startAppProvider: StartAppProvider,
    public translate: TranslateService,
  ) {
    translate.addLangs(['en', 'es', 'th']);
    translate.setDefaultLang('en');
    translate.use('th');
  }

  ionViewDidLoad() { }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  checkDir() {
    this.file.checkDir();
  }

  checkFile() {
    this.file.checkFile();
  }

  createTextFile() {
    let mockOrderData = this.file.mockOrderData();
    this.file.writeNewFile(mockOrderData);
    this.diagnostic.listennerBluetoothStatus();

    /** 
      console.log('applicationDirectory', this.file.applicationDirectory);
      console.log('applicationStorageDirectory', this.file.applicationStorageDirectory);
      console.log('cacheDirectory', this.file.cacheDirectory);
      console.log('dataDirectory', this.file.dataDirectory);
      console.log('documentsDirectory', this.file.documentsDirectory);
      console.log('externalApplicationStorageDirectory', this.file.externalApplicationStorageDirectory);
      console.log('externalCacheDirectory', this.file.externalCacheDirectory);
      console.log('externalDataDirectory', this.file.externalDataDirectory);
      console.log('externalRootDirectory', this.file.externalRootDirectory);
      console.log('sharedDirectory', this.file.sharedDirectory);
      console.log('syncedDataDirectory', this.file.syncedDataDirectory);
      console.log('tempDirectory', this.file.tempDirectory);
    */
    /**
      applicationDirectory file:///android_asset/
      applicationStorageDirectory file:///data/data/io.ionic.starter/
      cacheDirectory file:///data/data/io.ionic.starter/cache/
      dataDirectory file:///data/data/io.ionic.starter/files/
      documentsDirectory null
      externalApplicationStorageDirectory file:///storage/emulated/0/Android/data/io.ionic.starter/
      externalCacheDirectory file:///storage/emulated/0/Android/data/io.ionic.starter/cache/
      externalDataDirectory file:///storage/emulated/0/Android/data/io.ionic.starter/files/
      externalRootDirectory file:///storage/emulated/0/ 
    */
  }

  createEmptyFile() {
    this.file.writeEmpty();
  }

  testRemove() {
    this.file.removeFile();
  }

  gotoPrintSPC() {
    let mockOrderData = this.file.mockOrderData();
    this.file.writeNewFile(mockOrderData);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  printA() {
    let mockOrderData = this.file.mockOrderData();
    let text: string = '';
    text += this.file.printBill3A(mockOrderData);
    this.file.writeFile(text);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  printB() {
    let mockOrderData = this.file.mockOrderData();
    let text: string = '';
    text += this.file.printBill3B(mockOrderData);
    this.file.writeFile(text);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  printC() {
    let mockOrderData = this.file.mockOrderData();
    let text: string = '';
    text += this.file.printBill3C(mockOrderData);
    this.file.writeFile(text);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  printD() {
    let mockOrderData = this.file.mockOrderData();
    let text: string = '';
    text += this.file.printBill3D(mockOrderData);
    this.file.writeFile(text);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  printE() {
    let mockOrderData = this.file.mockOrderData();
    let text: string = '';
    text += this.file.printBill3E(mockOrderData);
    this.file.writeFile(text);
    this.diagnostic.listennerBluetoothStatus();
    this.startAppProvider.launchOtherApp();
  }

  testFunc() {
    // // test lengthThai
    // console.log(this.file.lengthThai('หฟกว่้หดวน่นดรำพระ-ภตคถผือืสไอ้ดร้ย'));
    // // test numberWithCommas
    // console.log(this.file.numberWithCommasAndDecimal(10000000.1234));
    // // test duplicate input text string
    // console.log(this.file.txtDup('a', 3)); 
    // console.log(this.file.txtDup('_', 63));

    // test txtbox and newTxtBox
    // console.log('old', '|' + this.file.txtbox('ส่วนลด', 10, 'l') + '|');
    // console.log('new', '|' + this.file.formatText('ส่วนลด', 10, 'l') + '|');
    // console.log('old', '|' + this.file.txtbox('ส่วนลด', 10, 'c') + '|');
    // console.log('new', '|' + this.file.formatText('ส่วนลด', 10, 'c') + '|');
    // console.log('old', '|' + this.file.txtbox('ส่วนลด', 10, 'r') + '|');
    // console.log('new', '|' + this.file.formatText('ส่วนลด', 10, 'r') + '|');

    // test txtbox1 and newTxtBox1
    // console.log('old1', '|' + this.file.txtbox1("รหัสสินค้า", 15, "l") + '|');
    // console.log('new1', '|' + this.file.formatText1("รหัสสินค้า", 15, "l") + '|');
    // console.log('old1', '|' + this.file.txtbox1("รหัสสินค้า", 15, "c") + '|');
    // console.log('new1', '|' + this.file.formatText1("รหัสสินค้า", 15, "c") + '|');
    // console.log('old1', '|' + this.file.txtbox1("รหัสสินค้า", 15, "r") + '|');
    // console.log('new1', '|' + this.file.formatText1("รหัสสินค้า", 15, "r") + '|');

    // test den stock doc
    // this.file.genStockDoc(null, '51')
    // this.file.genStockDoc(null, '52')
    // this.file.genStockDoc('C', '51')
    // this.file.genStockDoc('C', '52')
    let mockOrderData = this.file.mockOrderData();
    this.file.writeNewFile(mockOrderData);
    console.log('mockOrderData', mockOrderData);
    // console.log(this.file.billBody1(mockOrderData));

    // this.file.printBill3A(mockOrderData);
    // this.file.printBill3B(mockOrderData);
    // this.file.printBill3C(mockOrderData);
    // this.file.printBill3D(mockOrderData);
    // this.file.printBill3E(mockOrderData);
  }

  goToPrinter() {
    this.navCtrl.push('PrinterPage');
  }

  goToBarcodePage() {
    this.navCtrl.push('BarcodePage');
  }

}
