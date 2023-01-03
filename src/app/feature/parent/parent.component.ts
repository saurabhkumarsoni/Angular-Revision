import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedProduct!: string;
  addedProduct: any;
  productSelected: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(value: string){
    this.productSelected = true;
    this.selectedProduct = value;
  }
  onAddedProduct(proData: any){
    this.addedProduct = proData;

  }

 

}
