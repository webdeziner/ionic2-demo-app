import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-barcodescanner',
  templateUrl: 'barcodescanner.html'
})
export class BarcodescannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodescannerPage');
  }

}
