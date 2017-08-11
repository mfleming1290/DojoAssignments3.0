import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../../services/author.service";
import { Author } from '../../author'
import { PagerService } from '../../services/pager.service'
import { SearchPipe } from "../../search.pipe";
import { Router } from "@angular/router";



@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  filter: Author = new Author();

  // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];

  constructor(private router: Router, private authorService: AuthorService, private pagerService: PagerService) { }

  getAuthors() {
    this.authorService.getAuthors()
    .then(authors => {
      this.authors = authors
      console.log(authors)
    })
    .catch(() => {})
  }

  tdClick(event: Event) {
        event.stopPropagation();
    }

  removeAuthor(author) {
    console.log('in component')
    this.authorService.removeAuthor(author._id)
    .then(() => this.router.navigate(['/']))
    .catch(console.log)
  }


  ngOnInit() {
    this.getAuthors()
    this.getPages()
  }

  getPages() {
        this.authorService.getAuthors()
        .then(data => {
            console.log('getting pages from the server');
            this.allItems = data;
 
                // initialize to page 1
                this.setPage(1);
        })
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

}
