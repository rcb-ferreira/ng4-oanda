import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.sass']
})
export class AuthenticatedComponent implements OnInit {
  private chartData: Array<any>;
  accountId: any;
  loadingInstrument: boolean;
  loadingCandles: boolean;
  token: string;

  selectedInstrument:string;
  selectedGranularity: string;
  instruments: any;
  granularities: any;
  candles: Array<any> = [];
  
  constructor(private user: UserService, private api: ApiService) { }

  ngOnInit() {
    this.accountId = this.user.getAccountId();
    this.loadingInstrument = false;
    this.loadingCandles = false;

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

    // Default instruments array to prevent jumping.
    this.instruments = [{ "name": "EUR_USD", "type": "CURRENCY", "displayName": "EUR/USD" }];

    // Add default param to build graph with.
    this.selectedGranularity = "S5";
    this.selectedInstrument = "EUR_USD";

    this.token = this.user.getToken();
    this.listInstruments();
    this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, 100);

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

  getCandles(token, instrument, granularity, count) {
    this.loadingCandles = true;

    this.api.getCandles(token, instrument, granularity, count)
      .subscribe(result => {
        this.candles = result;
        this.loadingCandles = false;
      },
      error => {
        console.error(error);
        this.loadingCandles = false;
      });
  }

  // Trigger search
  toggleChart() {
    this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, 100)
  }
}
