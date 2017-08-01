import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
import { Author } from '../../author'
import { AuthorService } from '../../services/author.service'


@Component({
  selector: 'app-details-author',
  templateUrl: './details-author.component.html',
  styleUrls: ['./details-author.component.css']
})
export class DetailsAuthorComponent implements OnInit {
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

  onUpdate(author: Author) {
      this.authorService.updateAuthor(author)
      // .then(upBook => this.updatedAuthor.emit(upBook))
      .then(() => this.router.navigate(['/authors']))
      .catch(console.log)
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
