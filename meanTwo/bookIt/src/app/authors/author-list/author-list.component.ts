import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../../services/author.service";
import { Author } from '../../author'

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = []

  constructor(private authorService: AuthorService) { }

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
    .then(() => this.authors.splice(this.authors.indexOf(author, 1)))
    .catch(console.log)
  }


  ngOnInit() {
    this.getAuthors()
  }

}
