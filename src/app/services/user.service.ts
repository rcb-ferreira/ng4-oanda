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

    localStorage.setItem('token', token);
    localStorage.setItem('account_id', this.accountId);

    this.isUserLoggedIn = false;
    
  }

  getUserLoggedIn() {
    return localStorage.getItem('account_id');
  }

  signOut() {
    localStorage.setItem('token', '');
    localStorage.setItem('account_id', '');

    this.router.navigate(['login']);
  }
}
