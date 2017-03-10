import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { BadgePage } from '../pages/badge/badge';
import { BarcodescannerPage } from '../pages/barcodescanner/barcodescanner';
import { CameraPage } from '../pages/camera/carmera';
import { FlashlightPage } from '../pages/flashlight/flashlight';

@Component({
  templateUrl: 'app.html'
})
export class DemoApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Badge', component: BadgePage },
      { title: 'Barcode scanner', component: BarcodescannerPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Flashlight', component: FlashlightPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
