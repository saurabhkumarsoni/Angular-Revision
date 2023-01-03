import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-host-listner',
  templateUrl: './host-listner.component.html',
  styleUrls: ['./host-listner.component.css']
})
export class HostListnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('click') changeBg(){
    console.log('clicked')
  }

  @HostListener('scroll') changeBg1(){
console.log('scroll')
  }

}
