import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { QuoteComponentComponent } from './quote-component/quote-component.component';
import { QuoteListComponentComponent } from './quote-component/quote-list-component/quote-list-component.component';
import { QuoteCreateComponentComponent } from './quote-component/quote-create-component/quote-create-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponentComponent,
    QuoteListComponentComponent,
    QuoteCreateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
