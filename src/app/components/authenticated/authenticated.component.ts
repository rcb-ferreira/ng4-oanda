import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.sass']
})
export class AuthenticatedComponent implements OnInit {

  accountId: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.accountId = this.user.getUserLoggedIn();
  }

}
