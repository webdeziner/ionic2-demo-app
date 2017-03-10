import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DemoApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BadgePage } from '../pages/badge/badge';
import { BarcodescannerPage } from '../pages/barcodescanner/barcodescanner';
import { CameraPage } from '../pages/camera/carmera';
import { FlashlightPage } from '../pages/flashlight/flashlight';

@NgModule({
  declarations: [
    DemoApp,
    HomePage,
    BadgePage,
    BarcodescannerPage,
    CameraPage,
    FlashlightPage
  ],
  imports: [
    IonicModule.forRoot(DemoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DemoApp,
    HomePage,
    BadgePage,
    BarcodescannerPage,
    CameraPage,
    FlashlightPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
