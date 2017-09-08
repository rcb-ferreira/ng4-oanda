import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { instrumentItem } from '../models/instrument';
import { candleItem } from '../models/candles';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private getHeaders(token){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }

  getInstruments(token, accountId) {
    const options = new RequestOptions({ headers: this.getHeaders(token) });

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

  getCandles(token, instrument, granularity, count) {
    const options = new RequestOptions({ headers: this.getHeaders(token) });

    let apiURL = `https://api-fxpractice.oanda.com/v3/instruments/${instrument}/candles?price=B&granularity=${granularity}&count=${count}`;

    return this.http.get(apiURL, options)
      .map(res => {
        
        return res.json().candles.map(item => {
          return new candleItem(
            item.time,
            item.bid
          );
        });
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
