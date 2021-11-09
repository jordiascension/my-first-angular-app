import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ShowUserListComponent } from './show-user-list/show-user-list.component';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [{ path: 'user-list', component: UserListComponent },
{ path: 'home', component: HomeComponent },
{ path: 'hello', component: HelloWorldComponent },
{ path: 'show-user', component: ShowUserListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
