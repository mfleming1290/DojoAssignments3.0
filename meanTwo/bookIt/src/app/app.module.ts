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
import { PagerService } from "./services/pager.service";
import { BookFindService } from "./services/book-find.service";
import { BookSearchComponent } from './book-search/book-search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { FooterComponent } from './footer/footer.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameSearchComponent } from './games/game-search/game-search.component';
import { GameFindService } from "./services/game-find.service";
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GameService } from "./services/game.service";

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
    BookSearchComponent,
    SearchDetailsComponent,
    FooterComponent,
    GameListComponent,
    GameSearchComponent,
    GameDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [GameFindService, BookFindService, BookService, AuthorService, AuthService, AuthGuard, PagerService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
