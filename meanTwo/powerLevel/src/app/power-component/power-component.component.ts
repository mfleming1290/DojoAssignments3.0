import { Component, OnInit } from '@angular/core';
import { Sayin } from "../sayin";

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {
  power: number;
  sayin: Sayin = new Sayin();
  sayins: Sayin[] = [];
  onSubmit() {
    console.log(this.sayin);
    this.sayins.push(this.sayin)
    
  }

  constructor() { }

  ngOnInit() {
        this.power = 0;

  }

}
