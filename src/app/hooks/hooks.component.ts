import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { }

  value: any;

  ngOnInit(): void {
  }

  submitValue(val: any){
    this.value = val.value;
  }

}
