import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import  {usercreds} from '../../models/inerfaces/usercreds';
import  {AuthProvider} from '../../providers/auth/auth';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthProvider,
              public Alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.authService.login(this.credentials).then(data =>{
      console.log(JSON.stringify(data));
      if (data.status){
        let alert = this.Alert.create({title: 'Success', subTitle: 'Login Successful', buttons: ['OK']});
        alert.present();
        localStorage.setItem('Auth_Token', this.credentials.email);
        this.navCtrl.setRoot(TabsPage);
      }
      else{
        let alert = this.Alert.create({title: 'Error', subTitle: data.inf, buttons: ['OK']});
        alert.present();
      }
    });
  }
}
