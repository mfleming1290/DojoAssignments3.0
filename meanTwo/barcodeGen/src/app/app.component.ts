import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorArray = [];


  fillColors() {
    for (let i = 0; i < 10; i++) {
      const randomNumber = (Math.floor(Math.random() * 6) ) + 1;
      if (randomNumber === 1) {
        this.colorArray.push('BlueViolet');
      } else if (randomNumber === 2) {
        this.colorArray.push('Gainsboro');
      } else if (randomNumber === 3) {
        this.colorArray.push('FireBrick');
      } else if (randomNumber === 4) {
        this.colorArray.push('IndianRed');
      } else if (randomNumber === 5) {
        this.colorArray.push('LightSalmon');
      } else if (randomNumber === 6) {
        this.colorArray.push('LightSlateGray ');
      } else if (randomNumber === 7) {
        this.colorArray.push('LightSteelBlue');
      } else if (randomNumber === 8) {
        this.colorArray.push('MediumVioletRed');
      } else if (randomNumber === 9) {
        this.colorArray.push('MintCream');
      } else if (randomNumber === 10) {
        this.colorArray.push('Peru');
      }          
    }


  }

   ngOnInit() {
      this.fillColors();
    }

}
