import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Badge } from 'ionic-native';

@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html'
})
export class BadgePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(!Badge.hasPermission()) {
      Badge.registerPermission();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgePage');
  }

  setBadge(value:number) {
    Badge.set(value);
  }

  clearBadge() {
    Badge.clear();
  }

}
