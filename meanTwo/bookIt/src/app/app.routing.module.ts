import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BookListComponent } from "./book-list/book-list.component";
import { NewBookComponent } from "./new-book/new-book.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthorListComponent } from "./authors/author-list/author-list.component";
import { AuthorNewComponent } from "./authors/author-new/author-new.component";
import { AuthorDetailsComponent } from "./authors/author-details/author-details.component";
import { DetailsAuthorComponent } from "./authors/details-author/details-author.component";
import { HomeComponent } from "./home/home.component";
import { BookSearchComponent } from "./book-search/book-search.component";
import { SearchDetailsComponent } from "./search-details/search-details.component";
import {AuthGuard } from './auth.guard'


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'authors',
        children: [
            {
                path: '',
                component: AuthorListComponent
            },
            {
                path: 'new',
                component: AuthorNewComponent,
                canActivate: [AuthGuard]
            },
            {
                path: ':id',
                component: DetailsAuthorComponent
            },
            {
                path: 'book/:id',
                component: AuthorDetailsComponent
            }
        ]
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/new',
        component: NewBookComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'books/search',
        component: BookSearchComponent
    },
    {
        path: 'books/search/:id',
        component: SearchDetailsComponent
    },
    {
        path: 'books/:id',
        component: BookDetailsComponent
    },
     
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
   
    

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}