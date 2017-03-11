import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Native
import { Badge, BarcodeScanner, Camera, Flashlight, SQLite } from 'ionic-native';
// Main app
import { DemoApp } from './app.component';
// Pages
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Badge, BarcodeScanner, Camera, Flashlight, SQLite]
})
export class AppModule {}
