import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

import { User } from '../user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registrationErrors: string[] = [];

  user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.auth.register(user)
      .then(() => this.router.navigate(['books']))
      .catch(response => this.handleErrors(response.json()))
  }

  onLogin(user: User) {
    this.auth.login(user) 
    .then(() => this.router.navigate(['books']))
      .catch(response => this.handleErrors(response.json()))  
    
  }

  private handleErrors(errors: string[] | Error) {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors.message]
  }

}
