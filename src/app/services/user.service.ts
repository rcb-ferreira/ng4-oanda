import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public accountId;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user, token) {

    this.accountId = 0;
    user.forEach(element => {
      
      if (element.accounts.id) {
        this.accountId = element.accounts.id;
      }
    });

    localStorage.setItem('token', token);
    localStorage.setItem('account_id', this.accountId);

    this.isUserLoggedIn = false;
    
  }

  getUserLoggedIn() {
    return localStorage.getItem('account_id');
  }
}
