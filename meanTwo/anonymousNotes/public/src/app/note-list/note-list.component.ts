import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteService } from "../note.service";
import { Subscription } from "rxjs/Subscription";
import { BehaviorSubject } from "rxjs/BehaviorSubject";



@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  notes = [];

  constructor(private _noteService: NoteService) {
   }

   getNotes(){
     this._noteService.retrieveAll()
    .then( (notes) => {
      this._noteService.updateNotes(notes)
      this._noteService.noteSub.subscribe(
        (notes) =>  {this.notes = notes; },
        (err) => {console.log(err);},
        () => { }
      )
    }
    )
   }

  ngOnInit() {
    this.getNotes()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
