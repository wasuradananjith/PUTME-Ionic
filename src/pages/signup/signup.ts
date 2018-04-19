import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";
import { StatusBar } from '@ionic-native/status-bar';
import {UserProvider} from "../../providers/user/user";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  newuser = {
    email:'',
    password:'',
    firstName:'',
    lastName:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController, public userService:UserProvider,
              public alertCtrl : AlertController, private statusBar: StatusBar) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.firstName == '' || this.newuser.lastName == ''){
      let toast = this.toastCtrl.create({
        message: 'Please check all the fields!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
    else{
      this.userService.addUser(this.newuser).then(data =>{
        console.log(JSON.stringify(data));
        if (data.status == 1){
          let alert = this.alertCtrl.create({title: 'Success', subTitle: data.inf, buttons: ['OK']});
          alert.present();
          this.navCtrl.setRoot(LoginPage);
        }
        else if (data.status == 2){
          let toast = this.toastCtrl.create({
            message: data.inf,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
        else if (data.status == 0){
          let alert = this.alertCtrl.create({title: 'Error', subTitle: data.inf, buttons: ['OK']});
          alert.present();
        }
      });
    }
  }


  goback() {
    this.navCtrl.setRoot(LoginPage);
  }
}
