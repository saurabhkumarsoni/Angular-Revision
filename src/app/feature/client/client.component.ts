import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

count: number = 0;
@Input() boxColor: string | undefined;
@Input() placeholderText: string | undefined;
@Output() inputEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(inpVal:any){
    if(inpVal.value.length>0){
      this.count++
      this.inputEvent.emit(inpVal.value)
    }
    

  }

}
