import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from "../../models/globals";

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
    let url = global.hostUrl+"/mobile/mobile-filled-request-handler.php";
    let params = { email:newrequest.email, binNumber:newrequest.binNumber};
    let request = this.http.post(url,params);

    return request.toPromise();
  }
}
