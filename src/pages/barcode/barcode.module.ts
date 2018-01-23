import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodePage } from './barcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'; 

@NgModule({
  declarations: [
    BarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodePage),
    NgxQRCodeModule
  ],
})
export class BarcodePageModule { }
