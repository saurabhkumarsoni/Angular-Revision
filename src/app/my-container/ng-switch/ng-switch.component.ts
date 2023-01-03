import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  selectedProduct!: string;
  constructor() { }

  ngOnInit(): void {
  }

  getProductVal(val: any){
    this.selectedProduct = val.target.value;
  }

}
