import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three-component',
  templateUrl: './super-saiyan-three-component.component.html',
  styleUrls: ['./super-saiyan-three-component.component.css']
})
export class SuperSaiyanThreeComponentComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 250;
  }

}
