import { Component , OnInit } from '@angular/core';
import { User } from './services/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-app';
  user:User;
  userService;
  constructor(){
    
  }

  getUser(){
    this.user = this.userService.getUser;
      }
}
