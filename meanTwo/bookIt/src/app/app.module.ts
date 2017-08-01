import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http"
import { CookieModule } from "ngx-cookie";


import { AppComponent } from './app.component';
import { BookListComponent } from "./book-list/book-list.component";
import { TitleizePipe } from "./titleize.pipe";
import { SearchPipe } from "./search.pipe";
import { NewBookComponent } from './new-book/new-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from "./services/book.service";
import { AppRoutingModule } from "./app.routing.module";
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorNewComponent } from './authors/author-new/author-new.component';
import { AuthorService } from "./services/author.service";
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { DetailsAuthorComponent } from './authors/details-author/details-author.component';
import { AuthService } from "./services/auth.service";
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./auth.guard";
// TitleizePipe.skipWords = ['of'];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TitleizePipe,
    SearchPipe,
    NewBookComponent,
    BookDetailsComponent,
    NavComponent,
    NotFoundComponent,
    AuthorListComponent,
    AuthorNewComponent,
    AuthorDetailsComponent,
    DetailsAuthorComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [BookService, AuthorService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
