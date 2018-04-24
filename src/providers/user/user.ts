import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from "../../models/globals";

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
    let url = global.hostUrl+"/mobile/Register.php";
    let params = { email:newuser.email, password:newuser.password,firstName:newuser.firstName,lastName:newuser.lastName};
    let request = this.http.post(url,params);

    return request.toPromise();
  }
}
