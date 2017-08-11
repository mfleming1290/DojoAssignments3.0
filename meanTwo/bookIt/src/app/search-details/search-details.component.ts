import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from "../services/book.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
import { BookFindService } from "../services/book-find.service";
import { Book } from "../book";

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit, OnDestroy {
  book
  newBook: Book = new Book();
  subscription: Subscription;
  addedBook;

  constructor(private bookService: BookService ,private bookFinderService: BookFindService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.subscription = this.route.paramMap
      .switchMap(param => 
       this.bookFinderService.singleSearch(param.get('id'))
      )
      .subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(book) {
    book.year = parseInt(book.year)
    console.log(book)
    this.bookService.addSearchBook(book)
    .then(book => this.router.navigate(['/']))
  }

}
