import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName: string = 'saurabh kumar'
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
