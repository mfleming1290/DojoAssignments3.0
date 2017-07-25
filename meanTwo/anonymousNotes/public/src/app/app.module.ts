import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteService } from "./note.service";

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
