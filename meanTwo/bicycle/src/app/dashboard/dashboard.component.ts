import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isAuthed(): boolean {
    return this.authService.isAuthed();
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['']))
      .catch(() => {})
  }

}
