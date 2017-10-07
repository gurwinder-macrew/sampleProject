import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {

  }

  onClickActionSheet() {
    this.openActionSheet();
  }

  openActionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      buttons: [{
        text: 'About us',
        handler: () => {
          this.navCtrl.push(AboutPage);
        }
      }]
    });
    actionSheet.present();
  }
}
