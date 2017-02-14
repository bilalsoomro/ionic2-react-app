import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import React from 'react';
import ReactDOM from 'react-dom';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('react-container')
    );
  }

}
