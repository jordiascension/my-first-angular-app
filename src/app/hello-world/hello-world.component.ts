import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "Steve";

  greet(): void {
    if (environment.production) {
      alert('WE ARE IN PRODUCTION ENVIRONMMENT')
    }

    if (isDevMode()){
      alert('WE ARE IN DEVELOPMENT ENVIRONMMENT')
    } 

    console.log(this.name);
    alert("Hello " + this.name);
  };

}
