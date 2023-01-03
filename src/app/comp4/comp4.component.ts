import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName: string = 'saurabh kumar';
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
