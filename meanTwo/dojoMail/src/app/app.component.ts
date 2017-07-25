import { Component } from '@angular/core';
import { Mail } from "./mail";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mails: Mail[] = [
    {
      Email: 'bill@gates.com',
      Importance: true,
      Subject: 'New Windows',
      Content: 'Windows XI will launce in year 2100.'
    },
    {
      Email: 'ada@lovelace.com',
      Importance: true,
      Subject: 'Programming',
      Content: 'Enchantress of Numbers'
    },
    {
      Email: 'john@carmac.com',
      Importance: false,
      Subject: 'Updated Algos',
      Content: 'New algorithm for shadow volumes.'
    },
    {
      Email: 'bill@newel.com',
      Importance: false,
      Subject: 'HL3!',
      Content: 'Just kidding...'
    },
  ]
}
