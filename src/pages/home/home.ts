
import { Component } from '@angular/core';
import { NavController, ModalController, Nav } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { InfoPage } from '../info/info';
import { FriendsPage } from '../friends/friends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: Nav,public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  onClickFriends() {
    this.navCtrl.push(FriendsPage);
  }

  onClickInfo() {
    this.nav.push(InfoPage);
  }

}
