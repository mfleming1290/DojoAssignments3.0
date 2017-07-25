import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four-component',
  templateUrl: './super-saiyan-four-component.component.html',
  styleUrls: ['./super-saiyan-four-component.component.css']
})
export class SuperSaiyanFourComponentComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 500;
  }

}
