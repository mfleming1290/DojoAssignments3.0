import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isAuthed(): boolean {
    return this.authService.isAuthed();
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['home']))
      .catch(() => {})
  }

}
