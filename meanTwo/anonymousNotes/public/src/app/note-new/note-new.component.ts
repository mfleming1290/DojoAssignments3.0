import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from "../note";
import { NoteService } from "../note.service";



@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note: Note = new Note();

  constructor(private _noteService: NoteService) {}

  ngOnInit() {

  }
  
  onSubmit() {
    console.log(this.note);
    
    this._noteService.create(this.note)
    this._noteService.retrieveAll()
      .then((notes) => { this._noteService.updateNotes(notes) })
    this.note = new Note()


  }

}

