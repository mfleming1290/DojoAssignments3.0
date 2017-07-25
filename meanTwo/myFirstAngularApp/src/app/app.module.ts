import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { PeopleComponent } from "./people.component";
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { HttpService } from "./http.service";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommunicateService } from "./communicate.service";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    NoteComponent,
    NoteListComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
  	HttpModule // <-- Include module in our AppModules
  ],
  providers: [HttpService, CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
