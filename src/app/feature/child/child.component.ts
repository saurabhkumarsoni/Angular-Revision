import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() productSelected: boolean = false;
  @Input() selectedProduct!: string;
  @Output() addedProduct = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  addTOCart(){
    this.addedProduct.emit(this.selectedProduct)

  }

}
