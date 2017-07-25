import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons: boolean[] = [false, false,false,false,false,false,false,false,false,false] 

  toggle(idx) {
    console.log(idx);
    
    this.buttons[idx] = !this.buttons[idx];
  }

}
