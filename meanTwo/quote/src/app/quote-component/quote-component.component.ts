import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.css']
})
export class QuoteComponentComponent implements OnInit, Output {
  quotes: Quote[] = [
    {message: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace', vote: 25},
    {message: 'To be, or not to be', author: 'Prince Hamlet', vote: 2},
    {message: 'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.', author: 'John F. Kenndy', vote: 23}
  ];
  quote: Quote = new Quote;

  constructor() { }

  dataFromQouteCreate(eventData) {
    console.log('data from working', eventData);
    this.quotes.push(eventData)
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1)
  }




  ngOnInit() {
  }

}
