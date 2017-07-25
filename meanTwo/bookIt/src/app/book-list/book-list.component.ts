import { Component, OnInit, Input } from "@angular/core";
import { Book } from '../book';
import { TitleizePipe } from "../titleize.pipe";
import { BOOKS } from "../data/book.data";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
    providers: [TitleizePipe]


})

export class BookListComponent implements OnInit {
    books: Array<Book> = BOOKS;
    
    constructor(private titleize: TitleizePipe) {
       
    }

    ngOnInit() {
        this.titleCaseAuthors()
    }

    titleCaseAuthors(): void {
        this.books.forEach(book => {
            book.author = this.titleize.transform(book.author)
        });
    }

    

    dataFromNewBook(newBook) {
        console.log('working');
        
        this.books.push(newBook)
        
    }
}