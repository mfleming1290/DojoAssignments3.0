import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list-component',
  templateUrl: './quote-list-component.component.html',
  styleUrls: ['./quote-list-component.component.css']
})
export class QuoteListComponentComponent implements OnInit, Input, Output {

  @Input() myQuotes;

  @Output() deleteEvent = new EventEmitter

  upVote(quote) {
    quote.vote++
  }

  downVote(quote) {
    quote.vote--
  }

  delete(quote) {
    this.deleteEvent.emit(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
