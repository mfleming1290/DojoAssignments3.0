import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  last = null;
  time = new Date();

  selectTimeZone(timezone){
    this.time = new Date();
    if (timezone === 'PST') {
      this.time.setHours(this.time.getHours()) 
    } else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours()) 
    }
    else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() + 2) 
    }
    else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 3) 
    }

    this.last = timezone;
  }

  


}

