import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }


  changeBg(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('click') myClick(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue');
  }
  
  @HostListener('mouseover') mouseOver(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightgray');
  }

  @HostListener('mouseout') overOnCard(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

}
