import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import JsBarcode from 'jsbarcode';

const data = {};

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  text: string;
  qrData: string;
  createdQRCode: string;
  @ViewChild('barcode') barcode: ElementRef;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.text = '';
    this.qrData = '';
    this.createdQRCode = '';
  }

  ionViewDidLoad() {
    JsBarcode(this.barcode.nativeElement, 'hi!');
  }

  genBarcode() {
    JsBarcode(this.barcode.nativeElement, this.text, { format: 'CODE128' });
    // JsBarcode(this.barcode.nativeElement, this.text, { format: 'ean13' });
    JsBarcode(data, this.text);
    console.log(data);

    var canvas = document.createElement('canvas');
    JsBarcode(canvas, this.text, { format: 'CODE128' });
    // JsBarcode(canvas, this.text, { format: 'ean13' });
    // console.log(canvas.toDataURL('image/png'));

    let test: any = canvas.toDataURL('image/png');
    console.log(test);

    // return canvas.toDataURL("image/png");
  }

  createQRCode() {
    this.createdQRCode = this.qrData;
  }

}
