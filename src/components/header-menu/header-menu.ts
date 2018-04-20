import { Component } from '@angular/core';
import { App, Nav, MenuController } from 'ionic-angular';
//import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  constructor(//public authService: AuthServiceProvider,
    public menuCtrl: MenuController,
    public app: App) {
    console.log('Hello HeaderMenuComponent Component');
  }
  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
    localStorage.removeItem('User_Id');
  }
}
