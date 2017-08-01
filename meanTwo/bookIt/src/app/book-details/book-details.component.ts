import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from "../book";
import { BookService } from "../services/book.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  // @Input() 
  book: Book;
  subscription: Subscription;

  @Output() updatedBook = new EventEmitter<Book>();

  constructor(private bookService : BookService, private route: ActivatedRoute, private router: Router) { }

  getBooks() {
    this.subscription = this.route.paramMap
      .switchMap(param => 
       this.bookService.getBook(param.get('id'))
      )
      .subscribe(book => this.book = book);
  }




  ngOnInit() {
    this.getBooks()
  }


  onUpdate(book: Book) {
    // this.updatedBook.emit(book)
    this.bookService.updateBook(book)
    // .then(upBook => this.updatedBook.emit(upBook))
    .then(() => this.router.navigate(['/books']))
    .catch(console.log)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
