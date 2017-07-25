import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { CommunicateService } from "../communicate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscrition: Subscription
  users = [];
   
  constructor(private _communicateService: CommunicateService) {
    this.subscrition = _communicateService.observedUsers.subscribe(
      (updatedUsers) => { this.users = updatedUsers},
      (err) => {console.log(err)},
      () => {}   
      ) 
   }

  updateUsers() {
    this._communicateService.updateUsers(this.users);
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

  // retrieveCurrentUserData() {
  //   this.users = this._communicateService.subject.getValue();
  // }

  ngOnInit() {
  }

}
