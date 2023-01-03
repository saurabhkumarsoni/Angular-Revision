import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('contructor called');
   }

 @Input() myValue: string = 'saurbah'

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
    
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
    
  }

}
