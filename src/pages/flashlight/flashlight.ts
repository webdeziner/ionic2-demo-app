import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Flashlight } from 'ionic-native';

@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html'
})
export class FlashlightPage {
  error: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(!Flashlight.available()) {
      this.error = "No flashlight available";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

  turnOn() {
    Flashlight.switchOn();
  }

  turnOff() {
    Flashlight.switchOff();
  }

}
