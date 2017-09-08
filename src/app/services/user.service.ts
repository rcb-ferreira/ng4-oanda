import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public accountId;

  constructor(private router: Router) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user, token) {

    this.accountId = 0;
    user.forEach(element => {
      
      if (element.accounts.id) {
        this.accountId = element.accounts.id;
      }
    });

    localStorage.setItem('trading.token', token);
    localStorage.setItem('trading.account_id', this.accountId);

    this.isUserLoggedIn = false;
    
  }

  getAccountId() {
    return localStorage.getItem('trading.account_id');
  }

  getToken() {
    return localStorage.getItem('trading.token');
  }

  signOut() {
    localStorage.setItem('trading.token', '');
    localStorage.setItem('trading.account_id', '');

    this.router.navigate(['login']);
  }
}
