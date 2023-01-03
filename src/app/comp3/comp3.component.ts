import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName: string = 'saurabh Kumar'
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  updateUserName(uname: any){ 
    this.userService.userName.next(uname.value)
  }

}
