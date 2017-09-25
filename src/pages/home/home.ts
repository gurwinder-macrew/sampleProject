
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  onClickDetail() {

    this.navCtrl.push(DetailPage);
  }

  onClickInfoModel() {
    let modal = this.modalCtrl.create(InfoPage);
    modal.present();
  }

}
