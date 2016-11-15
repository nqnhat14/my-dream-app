import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {staticString} from "../utilities/staticString";
import 'rxjs/Rx';
import {Base64} from "../utilities/base64";
@Injectable()
export class LoginService {

  constructor(private http:Http, private base64:Base64) { }
  login(user:any){
    const data = {
      grant_type:"password",
      username:user.email,
      password:user.password
    }
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','Basic ' + this.base64.encode('123:456'));
    return this.http.post(staticString.apiUrl + "token",body,{headers:headers})
      .map(
        (data:Response) => data.json()
      );
  }
}
