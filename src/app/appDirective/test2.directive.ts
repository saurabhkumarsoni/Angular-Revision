import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest2]'
})
export class Test2Directive {

  constructor() { }



  @HostBinding('style.backgroundColor') bgColor = 'green';
  @HostBinding('class.myClass') className: any;
  @HostBinding('attr.title') myTitle: any;
@HostListener('click') myClick(){
  this.bgColor = 'blue';
  this.className = true;
  this.myTitle = "Hi This is my title"

  
}
}
