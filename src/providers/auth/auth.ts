import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {usercreds} from '../../models/interfaces/usercreds';
import { global } from "../../models/globals";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials:usercreds):Promise<any>{
      let url = global.hostUrl+"/mobile/Login.php";
      let params = { email:credentials.email, password:credentials.password};
      let request = this.http.post(url,params);

      return request.toPromise();
  }

}
