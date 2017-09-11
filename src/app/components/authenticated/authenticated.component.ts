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
  private count: number;
  accountId: any;
  loading: boolean;
  loadingInstrument: boolean;
  loadingCandles: boolean;
  reset: boolean;
  token: string;

  defaultInstrument:string;
  defaultGranularity: string;
  defaultCount: number;

  selectedInstrument:string;
  selectedGranularity: string;
  selectedCount: number;
  setSplice: number;

  instruments: any;
  granularities: any;

  countLimit: Array<number> = [];

  candles: Array<any> = [];
  
  constructor( 
    private user: UserService, 
    private api: ApiService) { }

  ngOnInit() {
    this.setSplice = 0;

    this.accountId = this.user.getAccountId();
    this.loadingInstrument = true;
    this.loadingInstrument = false;
    this.loadingCandles = false;
    this.reset = false;
    this.granularities = ["S5","S10","S15","S30","M1","M2","M3","M4","M5","M10","M15","M30","H1","H2","H3","H4","H6","H8","H12","D","W","M"];

    // Default instruments array to prevent jumping.
    this.instruments = [{ "name": "EUR_USD", "type": "CURRENCY", "displayName": "EUR/USD" }];

    // Add default param to build graph with.
    this.defaultGranularity = "S5";
    this.defaultInstrument = "EUR_USD";
    this.defaultCount = 100;

    this.selectedGranularity = this.defaultGranularity;
    this.selectedInstrument = this.defaultInstrument;
    this.selectedCount = this.defaultCount;

    // A quick and clean range counter to be used for dropdown.
    for (let i = 10; i > 0; i--) {
      this.countLimit.push(i * 10);
    }

    this.token = this.user.getToken();
    this.listInstruments();
    this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount);
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

  getCandles(token, instrument, granularity, count, loader:boolean = true) {

    this.loading = true;
    this.loadingCandles = loader;
    this.api.getCandles(token, instrument, granularity, count)
      .subscribe(result => {
        this.candles = result;
        this.loadingCandles = false;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loadingCandles = false;
        this.loading = false;
      });
  }

  // Trigger search
  toggleChart(setReset = true) {
    this.count = 0;
    this.reset = setReset;
    this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount, false);
  }

  resetChart() {
    this.reset = false;
    this.selectedGranularity = this.defaultGranularity;
    this.selectedInstrument = this.defaultInstrument;
    this.selectedCount = this.defaultCount;

    this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount, false);
  }
}
