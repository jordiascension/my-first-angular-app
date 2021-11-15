import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user-list/user';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  constructor(private userService: UserService,private route: ActivatedRoute,private route2:Router) { }
  model:User = new User(-1,'','','')
  id:number = -1;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.id = +params.id;
      this.model = this.userService.getUserById(this.id);
      console.log(this.model);
    })
  }

  UpdateUser(){
    this.userService.update(this.model);
    Swal.fire('Student','The student is updated','success');
    this.route2.navigate(['show-user']);
  }
  
  
  
 

}
