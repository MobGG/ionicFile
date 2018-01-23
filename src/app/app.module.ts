import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode' 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { Diagnostic } from '@ionic-native/diagnostic';

import { MyApp } from './app.component';

import { FilesProvider } from '../providers/files/files';
import { DiagnosticProvider } from '../providers/diagnostic/diagnostic';
import { StartAppProvider } from '../providers/start-app/start-app';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Diagnostic,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FilesProvider,
    DiagnosticProvider,
    StartAppProvider
  ]
})
export class AppModule { }


