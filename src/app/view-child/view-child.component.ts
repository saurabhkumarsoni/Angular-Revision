import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp6Component } from '../comp6/comp6.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  usernaame ="View child user name";

  @ViewChild('box') box!: ElementRef;

  @ViewChild(Comp6Component) child!: Comp6Component;



  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.box);
    // this.box.nativeElement.style.backgroundColor = 'red';  // normal way but not good
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'rgb(13 110 253 / 25%)');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
  }
  getChildProperty(){
    this.child.username = 'I am a property from parent'
    this.usernaame = this.child.username;
  }

  callChildMethod(){
    this.child.clickMe();
  }

}
