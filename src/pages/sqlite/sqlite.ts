import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html'
})
export class SqlitePage {
  db:any = new SQLite();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SqlitePage');
  }

  ionViewDidEnter() {
    this.load();
  }

  load() {

  }

  add() {

  }

}
