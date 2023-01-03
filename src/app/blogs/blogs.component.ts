import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  userList = [{
    id:'',
    name: '',
    username: '',
    email:'',
    address: '',
    phone: '',
    website: '',
    company: '',
  }]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.userService.getUsers().subscribe(res =>{
      this.userList = res;
    })
  }

}
