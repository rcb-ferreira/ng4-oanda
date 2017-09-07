import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user, token) {
    this.username = 'Rui Ferreira';

    localStorage.setItem('token', token);
    localStorage.setItem('user', this.username);

    this.isUserLoggedIn = true;
    
  }

  getUserLoggedIn() {
    return localStorage.getItem('user');
  }
}
