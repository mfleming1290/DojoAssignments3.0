import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Book } from '../book';



@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
@Output() sendBook = new EventEmitter<Book>();
  book: Book = new Book();

  constructor() {
       
  }

  ngOnInit() {
  }


  onSubmit(form): void {
      console.log(this.book);
      this.sendBook.emit(this.book)
      this.book = new Book();
  }


}
