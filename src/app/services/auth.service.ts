import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { userItem } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  isUserAuthenticated() {

    if (localStorage.getItem('token')) {
      return true;
    }
    
    return false;
  }

  authenticate(token: string) {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const options = new RequestOptions({ headers: headers });

    let apiURL = `https://api-fxpractice.oanda.com/v3/accounts`;

    return this.http.get(apiURL, options)
      .map(res => {
        
        return res.json().accounts.map(item => {
          return new userItem(
            item,
          );
        });
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let body = JSON.parse(error._body);
    return Observable.throw(body);
  }
}
