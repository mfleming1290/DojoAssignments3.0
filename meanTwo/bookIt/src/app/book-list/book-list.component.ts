import { Component, OnInit, Input } from "@angular/core";
import { Book } from '../book';
import { TitleizePipe } from "../titleize.pipe";
import { BookService } from "../services/book.service";
import { SearchPipe } from "../search.pipe";
import { PagerService } from '../services/pager.service'
import { Router } from "@angular/router";
import { BookFindService } from "../services/book-find.service";

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

    // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: Book[];

    // searchbook = [];
    foundBooks
 
        
    
    constructor(private bookFindService: BookFindService, private router: Router, private pagerService: PagerService, private titleize: TitleizePipe, private bookService: BookService) {
       
    }

    searchBook() {
        this.bookFindService.getBook()
        .subscribe(books => {
            this.foundBooks = books
        })
  
    }

    
    
    ngOnInit() {
        this.getBooks();
        this.getPages()
    }

    getPages() {
        this.bookService.getPage()
        .then(data => {
            console.log('getting pages from the server');
            this.allItems = data;
 
                // initialize to page 1
                this.setPage(1);
        })
        .then(() => this.titleCaseAuthors())
        .catch(console.log)
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
        this.bookService.removeBook(book._id)
        .then(() => this.router.navigate(['/books/new']))
        .catch(console.log)
        
    }

    updateSelectedBook(book: Book) {
        console.log('updating book', book);
        this.books.splice(this.books.indexOf(this.selectedBook), 1, book)
    }
}