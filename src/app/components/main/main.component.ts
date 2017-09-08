import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() instrument:string = '';
  @Input() granularity: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.instrument);
    console.log(this.granularity);
    // this.listInstruments = JSON.parse(this.instruments);
  }

}
