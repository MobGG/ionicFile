import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilePage } from './file';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    FilePage,
  ],
  imports: [
    IonicPageModule.forChild(FilePage),
    TranslateModule.forChild(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    ),
  ],
  exports: [
    FilePage,
  ]
})
export class FilePageModule { }
