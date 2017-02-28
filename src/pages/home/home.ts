import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReactUI } from './react-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    ReactUI.initialize();
  }

}
