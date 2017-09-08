import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.sass']
})
export class AuthenticatedComponent implements OnInit {

  accountId: any;
  loadingInstrument: boolean;
  token: string;

  selectedInstrument:string;
  selectedGranularity: string;
  instruments: any;
  granularities: any;

  constructor(private user: UserService, private api: ApiService) { }

  ngOnInit() {
    this.accountId = this.user.getAccountId();
    this.loadingInstrument = false;

    this.granularities = [
      "S5",
      "S10",
      "S15",
      "S30",
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M10",
      "M15",
      "M30",
      "H1",
      "H2",
      "H3",
      "H4",
      "H6",
      "H8",
      "H12",
      "D",
      "W",
      "M"
    ];

    // Add default param to build graph with.
    this.selectedGranularity = "S5";
    this.selectedInstrument = "EUR_USD";

    this.token = this.user.getToken();
    this.listInstruments();
  }


  listInstruments() {
    
    this.loadingInstrument = true;
    this.api.getInstruments(this.token, this.user.getAccountId())
      .subscribe(result => {
        this.instruments = result;
        this.loadingInstrument = false;
      },
      error => {
        console.error(error);
        this.loadingInstrument = false;
      });
  }
}
