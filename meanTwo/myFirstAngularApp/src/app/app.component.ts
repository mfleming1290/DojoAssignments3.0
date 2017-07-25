import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CommunicateService } from "./communicate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks = [];
  users = [
    {email:'a@a.com'},
    {email:'b@b.com'}
  ]

  changeTwo(){
    this.users = [
      {email:'aa@aa.com'},
      {email:'bb@bb.com'}
    ]
    this._communicateService.updateUsers(this.users)
  }

  changeThree(){
    this.users = [
      {email:'matt@gmail.com'},
      {email:'jim@gmail.com'}
    ]
    this._communicateService.updateUsers(this.users)
  }

  constructor(private _httpService: HttpService, private _communicateService: CommunicateService) {
    _communicateService.updateUsers(this.users)
  }

  updateUsers() {
    this._communicateService.updateUsers(this.users)
  }

  getTasks(){
    this._httpService.retrieveTasks()
    .then( tasks => { this.tasks = tasks })
    .catch( err => { console.log(err); })
  }
}
