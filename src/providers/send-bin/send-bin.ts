import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {usercreds} from "../../models/inerfaces/usercreds";

/*
  Generated class for the SendBinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SendBinProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SendBinProvider Provider');
  }

  sendFilledRequest(newrequest):Promise<any>{
    //let url = "http://localhost/PUTME-Web/mobile/mobile-filled-request-handler.php";
    let url = "http://putme2018-001-site1.1tempurl.com/mobile/mobile-filled-request-handler.php";
    let params = { email:newrequest.email, binNumber:newrequest.binNumber};
    let request = this.http.post(url,params);

    return request.toPromise();
  }
}
