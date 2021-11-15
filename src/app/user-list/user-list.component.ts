import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { UserAbstractService } from './user-abstract.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //https://developerslogblog.wordpress.com/2019/04/23/how-to-use-angular-services-to-share-data-between-components/
  //https://www.pluralsight.com/guides/how-to-implement-services-and-dependency-injection-angular
  constructor(private userService: UserAbstractService) {

	}

  ngOnInit(): void {
  }

  model = new User(18, 'Pepe', 'Soto', '38115076c');

  submitted = false;

  onSubmit() { this.submitted = true; }

  SaveUser() { 
    const user:User = {
      id: this.model.id,
      name: this.model.name,
      surname: this.model.surname,
      dni:this.model.dni
    };

    this.userService.addUser(user);
    console.log(user);
    Swal.fire('Students', 'The student is inserted', 'success');

  }
}  


