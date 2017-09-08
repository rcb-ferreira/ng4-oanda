import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  selectedInstrument: string;
  listInstruments: any;

  @Input() instruments;

  constructor() { }

  ngOnInit() {
    console.log(this.instruments);
    
    // this.listInstruments = JSON.parse(this.instruments);
  }

}
