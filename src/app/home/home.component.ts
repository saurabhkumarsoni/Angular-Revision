import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = 'saurabh kumar';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userName.subscribe(res => {
      this.userName = res;
    })
  }

}
