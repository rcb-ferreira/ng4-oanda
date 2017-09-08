import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  token: string;
  loading: boolean;

  constructor(private router: Router, private auth: AuthService, private user: UserService) { }

  ngOnInit() {
    this.token = '';
    this.loading = false;
    if (this.auth.isUserAuthenticated()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginUser(token: string = '') {

    if (!token) {
      return;
    }

    this.loading = true;
    this.auth.authenticate(token)
      .subscribe(result => {
        this.user.setUserLoggedIn(result, token);
        this.router.navigate(['dashboard']);
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      });
  }

}
