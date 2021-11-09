import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldJordiComponent } from './hello-world-jordi/hello-world-jordi.component';
import { UserService } from './user-list/user.service';
import { ShowUserListComponent } from './show-user-list/show-user-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HelloWorldComponent,
    HelloWorldJordiComponent,
    ShowUserListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
