import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CandlestickComponent implements OnInit {
  @ViewChild('candlestick') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, right: 20, bottom: 70, left: 40 };
  private candlestick: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;
  constructor() { }

  ngOnInit() {
    this.createChart();
    // if (this.data) {
    //   this.updateChart();
    // }
  }

  createChart() {
    console.log('Create Chart', this.data);
  }

}
