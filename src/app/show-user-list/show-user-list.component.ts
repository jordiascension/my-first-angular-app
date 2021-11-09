import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-show-user-list',
  templateUrl: './show-user-list.component.html',
  styleUrls: ['./show-user-list.component.css']
})
export class ShowUserListComponent implements OnInit {

  users?: User[];

  constructor(private userService: UserService) {

	}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  delete(id:number): void {
    
  }

}
