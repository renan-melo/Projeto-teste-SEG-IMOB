import { Component, OnInit } from '@angular/core';
import {ResponseUsers} from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  responseUsers: ResponseUsers;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers().subscribe(res => this.responseUsers = res)
  }

}
