import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUsers().subscribe(res => this.responseUsers = res);

    this.user.first_name = 'teste';
    this.user.last_name = 'lstTeste';
    this.user.id = 1;
    this.user.email = 'teste@teste.com';

  }

}
