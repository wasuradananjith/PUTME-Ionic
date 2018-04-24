import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, Nav, MenuController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,public alertCtrl : AlertController) {
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

  helpClicked() {
    console.log("Help");
    //this.authService.logout();
    let alert = this.alertCtrl.create({title: 'Help', subTitle: 'Go to the home tab and enter the bin number and submit it', buttons: ['OK']});
    alert.present();
  }

  aboutusClicked() {
    console.log("AboutUs");
    //this.authService.logout();
    let alert = this.alertCtrl.create({title: 'About Us', subTitle: 'Powered by TryCatch++', buttons: ['OK']});
    alert.present();
  }

}
