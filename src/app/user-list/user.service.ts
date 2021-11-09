import { User } from '../user-list/user';
import { Injectable } from '@angular/core';

//https://www.positronx.io/angular-7-httpclient-http-service/
@Injectable()
export class UserService {
    private _users: User[] = [];
  
    constructor() { }
  
    addUser(user:User) : Boolean {
      this._users.push(user)
      console.log("Users array count " + this._users.length);
      console.log(this._users);
      return true;
    }

    getUsers(): User[] {
      return this._users;
    }

    delete(id:number): void {
    
    }
  }