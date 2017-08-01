import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { BicycleService } from "../services/bicycle.service";
import { Bicycle } from '../bicycle'

import { User } from "../user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bike: Bicycle;
  loginErrors: string
  registrationErrors: string[] = [];

  user: User = new User();

  constructor(private auth: AuthService, private router: Router, private bicycleService: BicycleService) { }

  ngOnInit() {
    this.findOne()
  }

  findOne() {
    console.log('in component')
    this.bicycleService.findOne()
    .then((bike) => {
      this.bike = bike
    })
    .catch(response => this.handleErrors(response.json()))
  }

  onSubmit(user: User) {
    this.auth.register(user)
      .then(() => this.router.navigate(['dashboard']))
      .catch(response => this.handleErrors(response.json()))
  }

  onLogin(user: User) {
    this.auth.login(user) 
    .then(() => this.router.navigate(['dashboard']))
      .catch(response => this.loginErrors = response._body)  
    
  }

  private handleErrors(errors: string[] | Error) {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors.message]
  }

  

}
