import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-barcodescanner',
  templateUrl: 'barcodescanner.html'
})
export class BarcodescannerPage {
  data: any;
  error: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodescannerPage');
  }

  scanBarcode() {
    BarcodeScanner.scan().then((scannerData) => {
      this.data = scannerData;
    }, (error) => {
      this.error = error;
    });
  }

}
