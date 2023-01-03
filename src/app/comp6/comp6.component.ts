import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestDirective } from '../appDirective/test.directive';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit, AfterViewInit{
username = 'user from child'

@ContentChild('childCon') childParagraph!: ElementRef;


  @ViewChild(TestDirective)
  myDir!: TestDirective;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  clickMe(){
    alert(this.username);
    var text = this.renderer.createText('this text is created by renderer' );
    this.renderer.appendChild(this.childParagraph.nativeElement, text);

  }
  ngAfterViewInit(): void {
    console.log(this.childParagraph);
    this.renderer.setStyle(this.childParagraph.nativeElement, 'color', 'blue')
  }

  changeColor(color: string){
    this.myDir.changeBg(color);

  }

 

}
