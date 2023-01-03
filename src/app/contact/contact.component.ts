import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
users =[''];
admins = ['']
  constructor() { }

  ngOnInit(): void {
  }

  pushUsers(data: any){
    this.users.push(data)

  }
  pushAdmin(data: any){
    this.admins.push(data);
  }

  

}
