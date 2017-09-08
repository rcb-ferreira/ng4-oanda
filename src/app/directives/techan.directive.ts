import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTechan]',
  inputs: ['candles'],
})
export class TechanDirective {

  constructor(element: ElementRef) {
    console.log(element.nativeElement.attributes);
  }
}
