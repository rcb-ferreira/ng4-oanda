import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  loading: boolean;
  candles: any;
  @Input() instrument: string = '';
  @Input() granularity: string = '';
  @Input() token: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loading = false;
    this.listCandles(this.token, this.instrument, this.granularity, 100);
  }

  listCandles(token, instrument, granularity, count) {

    this.loading = true;
    this.api.getCandles(token, instrument, granularity, count)
      .subscribe(result => {
        this.candles = result;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      });
  }

}
