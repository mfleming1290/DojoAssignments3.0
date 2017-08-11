import { Component, OnInit } from '@angular/core';
import { BookFindService } from "../services/book-find.service";
import { Search } from "../search";
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  foundBooks
  search: Search = new Search();


  constructor(private router: Router, private bookFindService: BookFindService) { }

  onSubmit(search){
    console.log('submitting', search);
    this.bookFindService.searchBook(search)
        .subscribe(books => {
            this.foundBooks = books
        })
  }

  searchBook() {
        this.bookFindService.getBook()
        .subscribe(books => {
            this.foundBooks = books
        })
  
    }

  ngOnInit() {
  }

  findBook(book) {
        console.log('in find book ', book.industryIdentifiers[0].identifier);      
        // this.bookService.removeBook(book._id)
       this.router.navigate(['/books', 'search', book.industryIdentifiers[0].identifier])
        
    }

}
