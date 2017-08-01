import { Component, OnInit, Input } from "@angular/core";
import { Book } from '../book';
import { TitleizePipe } from "../titleize.pipe";
import { BookService } from "../services/book.service";
import { SearchPipe } from "../search.pipe";
// import { BOOKS } from "../data/book.data";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
    providers: [TitleizePipe]


})

export class BookListComponent implements OnInit {
    books: Array<Book> = [];
    selectedBook: Book;

    filter: Book = new Book();
    
    constructor(private titleize: TitleizePipe, private bookService: BookService) {
       
    }

    ngOnInit() {
        this.getBooks();
    }

    getBooks() {
        this.bookService.getBooks()
        .then(books => {
            console.log('getting books from the server');
            
            this.books = books;
        })
        .then(() => this.titleCaseAuthors())
        .catch(console.log)
    }

    titleCaseAuthors(): void {
        this.books.forEach(book => {
            book.author.name = this.titleize.transform(book.author.name)
        });
    }

    selectBook(book) {
        this.selectedBook = book === this.selectedBook ? null: book;        
    }

    dataFromNewBook(newBook: Book) {
        console.log('working');   
        this.books.push(newBook)
    }

    tdClick(event: Event) {
        event.stopPropagation();
    }

    deleteBook(book: Book) {
        console.log('in del book ', book, book._id);
        // const idx = this.books.indexOf(book);
        // this.books.splice(idx, 1);        
        this.bookService.removeBook(book._id)
        .then(() => this.books.splice(this.books.indexOf(book, 1)))
        // .then(() => this.selectBook(book))
        .catch(console.log)
        
    }

    updateSelectedBook(book: Book) {
        console.log('updating book', book);
        this.books.splice(this.books.indexOf(this.selectedBook), 1, book)
    }
}