import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: any[] = [
    {title: 'first note'},
    {title: 'second note'}
  ];

  dataFromChild(eventData) {
    console.log(eventData);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
