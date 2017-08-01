import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Book } from '../book';
import { BookService } from "../services/book.service";
import { AuthorService } from "../services/author.service";
import { Author } from "../author";
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
@Output() sendBook = new EventEmitter<Book>();
  book: Book = new Book();
  authors: Array<Author> = [];

  constructor(private bookService: BookService, private authorService: AuthorService, private router: Router) {
       
  }

  ngOnInit() {
    this.authorService.getAuthors()
    .then(authors => this.authors = authors)
    .catch(() => {})
  }


  onSubmit(form): void {
      // console.log(this.book);
      // this.sendBook.emit(this.book)
      this.bookService.addBook(this.book)
        .then((book) => this.router.navigate(['books', book._id]))
        .catch(console.log);

      
  }


}
