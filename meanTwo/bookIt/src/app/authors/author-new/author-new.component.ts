import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Author } from "../../author";
import { AuthorService } from "../../services/author.service";

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author: Author = new Author();
  errorMessages: string[] = [];



  constructor(private authorService: AuthorService, private router: Router) { }

  onSubmit(author: Author){
    console.log('submitting', author);
    this.authorService.createAuthor(author)
    .then(() => this.router.navigate(['authors']))
    .catch(err => {
      console.log('catching errors', err);
      this.handleErrors(err.json())
    })
  }

  private handleErrors(error: string[] | Error): void {
    this.errorMessages = Array.isArray(error) ? error : [error.message];
  }

  ngOnInit() {
  }

}
