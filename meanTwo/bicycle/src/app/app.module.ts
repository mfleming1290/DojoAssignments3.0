import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from "./services/auth.service";
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { CookieModule } from "ngx-cookie";

import {AuthGuard } from './auth.guard';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component'
import { BicycleService } from "./services/bicycle.service";
import { SearchPipe } from './search.pipe';
import { EqualValidator } from './equal-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    BrowseComponent,
    ListingComponent,
    SearchPipe,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    BicycleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
