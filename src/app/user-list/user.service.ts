import { User } from '../user-list/user';
import { Injectable } from '@angular/core';
import { UserAbstractService } from './user-abstract.service';

//https://www.positronx.io/angular-7-httpclient-http-service/
@Injectable()
export class UserService implements UserAbstractService {
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

    //TODO
    getUserById(id: number):User {
      const user = this._users.find(u=>u.id === id);
      if(typeof user !== 'undefined') return user;
      return new User(0,'','','');
    }

    delete(id:number): void {
      const index = this._users.findIndex(u=>u.id === id);
      if(index >= 0) this._users.splice(index,1);
    }

    update(user:User):void{
      const index = this._users.findIndex(u=>u.id === user.id);
      if(index >= 0) this._users.splice(index,1,user);
    }

  }