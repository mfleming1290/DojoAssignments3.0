import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
import { Author } from '../../author'
import { AuthorService } from '../../services/author.service'

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {
  author: Author

  subscription :Subscription

  constructor(private authorService : AuthorService, private route: ActivatedRoute, private router: Router) { }


  getbooks() {
    this.subscription = this.route.paramMap
      .switchMap(param => 
       this.authorService.getAuthor(param.get('id'))
      )
      .subscribe(author => this.author = author);
  }

  ngOnInit() {
    this.getbooks()

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
