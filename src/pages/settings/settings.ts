import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, Nav, MenuController } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    console.log('Hello settings page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    localStorage.removeItem('User_Id');
  }

}
