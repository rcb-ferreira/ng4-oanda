import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.sass']
})
export class AuthenticatedComponent implements OnInit {

  accountId: any;
  instruments = [
    {
      name: 'EUR_USD',
      updated: new Date('1/1/16'),
    }
  ];
  constructor(private user: UserService) { }

  ngOnInit() {
    this.accountId = this.user.getUserLoggedIn();
  }

}
