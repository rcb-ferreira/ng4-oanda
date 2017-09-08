import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { instrumentItem } from '../models/instrument';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getInstruments(token, accountId) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const options = new RequestOptions({ headers: headers });

    let apiURL = `https://api-fxpractice.oanda.com/v3/accounts/${accountId}/instruments`;

    return this.http.get(apiURL, options)
      .map(res => {

        return res.json().instruments.map(item => {
          return new instrumentItem(
            item.name,
            item.type,
            item.displayName
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
