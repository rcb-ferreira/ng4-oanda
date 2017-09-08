import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() accountId: number;
  constructor(private user: UserService) { }

  ngOnInit() {
  }

  signOut() {
    this.user.signOut();
  }

}
