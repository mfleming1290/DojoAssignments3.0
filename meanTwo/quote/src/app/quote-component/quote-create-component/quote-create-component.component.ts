import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../../quote";

@Component({
  selector: 'app-quote-create-component',
  templateUrl: './quote-create-component.component.html',
  styleUrls: ['./quote-create-component.component.css']
})
export class QuoteCreateComponentComponent implements OnInit, Output {
  quotes: Quote[] = [] 
  quote: Quote = new Quote;
  
  @Output() aTaskEventEmitter = new EventEmitter();

  // triggerEvent() {
  //   this.aTaskEventEmitter.emit()
  // }

  constructor() { }

  onSubmit() {
    // console.log(this.quote);
    this.quotes.push(this.quote)
    this.aTaskEventEmitter.emit(this.quote)
    this.quote = new Quote();



  }

  ngOnInit() {
  }

}
