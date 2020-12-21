import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tableau = [
    'blue',
    'lightblue',
    'coral',
    'pink',
    'green',
    'lightyellow',
    'lightgreen',
    'gold',
    'gray',
    'lightgray'
  ];

  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  
  constructor() { }
  @HostListener('keypress') changeColor() {
    const index =Math.floor(Math.random() * (this.tableau.length - 1));
    const index1 =Math.floor(Math.random() * (this.tableau.length - 1));
    console.log(index);
    console.log(index1);
    this.bc = this.tableau[index];
    this.color =  this.tableau[index1];
  }
}
