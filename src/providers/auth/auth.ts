import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {usercreds} from '../../models/inerfaces/usercreds';

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
      let url = "http://localhost/PUTME-Web/mobile/Login.php";
      //let url = "http://putme2018-001-site1.1tempurl.com/mobile/Login.php";
      let params = { email:credentials.email, password:credentials.password};
      let request = this.http.post(url,params);

      return request.toPromise();
  }

}
