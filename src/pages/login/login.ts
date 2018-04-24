import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import  {usercreds} from '../../models/interfaces/usercreds';
import  {AuthProvider} from '../../providers/auth/auth';
import {TabsPage} from "../tabs/tabs";
import {SignupPage} from "../signup/signup";
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthProvider,
              public alertCtrl : AlertController, public toastCtrl:ToastController, private statusBar: StatusBar, public loadingCtrl:LoadingController) {
    if (localStorage.getItem("User_Id")!=null){
      navCtrl.setRoot(TabsPage);
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    if (this.credentials.email == null || this.credentials.password == null){
      let toast = this.toastCtrl.create({
        message: 'Please check all the fields!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
    else{
      this.authService.login(this.credentials).then(data =>{
        console.log(JSON.stringify(data));
        if (data.status){
          let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
          });
          loader.present();

          /*let alert = this.alertCtrl.create({title: 'Success', subTitle: 'Login Successful', buttons: ['OK']});
          alert.present();*/
          localStorage.setItem('User_Id', this.credentials.email);
          this.navCtrl.setRoot(TabsPage);
        }
        else{
          let toast = this.toastCtrl.create({
            message: data.inf,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      });
    }
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}
