import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CandlestickComponent implements OnInit, OnChanges {
  @Input() private candles: Array<any>;
  options;
  data;
  
  ngOnInit() {}

  // Listen to any changes and apply to chart
  ngOnChanges() {

    this.options = {
      chart: {
        type: 'candlestickBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 60
        },
        x: function (d) { return d['date']; },
        y: function (d) { return d['close']; },
        duration: 100,

        xAxis: {
          axisLabel: 'Dates',
          tickFormat: function (d) {
            return d3.time.format('%b %d/%y')(new Date(d));
          },
          showMaxMin: false
        },

        yAxis: {
          axisLabel: 'Stock Price',
          tickFormat: function (d) {
            return '$ ' + d3.format(',.2f')(d);
          },
          showMaxMin: false
        },
        zoom: {
          enabled: true,
          scaleExtent: [1, 10],
          useFixedDomain: true,
          useNiceScale: true,
          horizontalOff: false,
          verticalOff: false,
          unzoomEventType: 'dblclick.zoom'
        }
      }
    }

    this.data = [{
      values: this.candles
    }];
  }

}
