import { Component } from '@angular/core';
import { App, Nav, MenuController,AlertController,LoadingController } from 'ionic-angular';
//import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  email:any;
  constructor(//public authService: AuthServiceProvider,
    public menuCtrl: MenuController,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public app: App) {

    this.email = localStorage.getItem('User_Id');
    console.log('Hello HeaderMenuComponent Component');
  }
  logoutClicked() {
    console.log("Logout");
    let loader = this.loadingCtrl.create({
      content: "Logging Out...",
      duration: 3000
    });
    loader.present();

    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    localStorage.removeItem('User_Id');
  }

  helpClicked() {
    console.log("Help");
    //this.authService.logout();
    let alert = this.alertCtrl.create({title: 'Help', subTitle: '<br>Go to the home tab and enter the bin number and submit it', buttons: ['OK']});
    alert.present();
  }

  aboutusClicked() {
    console.log("AboutUs");
    //this.authService.logout();
    let alert = this.alertCtrl.create({title: 'About Us', subTitle: '<br>Powered by TryCatch++', buttons: ['OK']});
    alert.present();
  }
}
