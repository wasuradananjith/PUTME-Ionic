import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {usercreds} from "../../models/inerfaces/usercreds";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  addUser(newuser):Promise<any>{
    let url = "http://localhost/PUTME-Web/mobile/Register.php";
    //let url = "http://putme2018-001-site1.1tempurl.com/mobile/Register.php";
    let params = { email:newuser.email, password:newuser.password,firstName:newuser.firstName,lastName:newuser.lastName};
    let request = this.http.post(url,params);

    return request.toPromise();
  }
}
