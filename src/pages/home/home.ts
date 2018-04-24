import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendBinProvider } from '../../providers/send-bin/send-bin';

import { ToastController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  newrequest = {
    binNumber:'',
    email:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public sendBinService:SendBinProvider,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  sendBinNumber(){
    this.newrequest.email = localStorage.getItem('User_Id');

    if (this.newrequest.binNumber == '' || this.newrequest.email == ''){
      let toast = this.toastCtrl.create({
        message: 'Please enter a bin number!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
    else{
      this.sendBinService.sendFilledRequest(this.newrequest).then(data =>{
        console.log(JSON.stringify(data));
        if (data.status==1){
          let alert = this.alertCtrl.create({title: 'Success', subTitle: data.inf, buttons: ['OK']});
          alert.present();
        }
        else if (data.status==2){
          let alert = this.alertCtrl.create({title: 'Nice Try', subTitle: data.inf, buttons: ['OK']});
          alert.present();
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

}
