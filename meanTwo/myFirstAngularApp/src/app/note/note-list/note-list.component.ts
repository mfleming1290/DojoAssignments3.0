import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() myNotes;

  @Output() aTaskEventEmitter = new EventEmitter();

triggerEvent() {
  this.aTaskEventEmitter.emit(7);
}


  constructor() { }

  ngOnInit() {
  }

}
