import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.sass']
})
export class AuthenticatedComponent implements OnInit {

  validUser: string;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.validUser = this.user.getUserLoggedIn();
  }

}
