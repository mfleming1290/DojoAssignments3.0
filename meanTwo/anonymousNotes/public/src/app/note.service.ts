import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Note } from "./note";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs'

@Injectable()
export class NoteService {
  data: Note[];
  noteSub = new BehaviorSubject(null);
  constructor(private _http: Http) { }

  updateNotes(notes: Note[]) {
    this.noteSub.next(notes);
  }

  retrieveAll(){
    return this._http.get('/notes')
    .map(data => data = data.json())
    .toPromise()

  }

  create(product) {
    return this._http.post(`/notes`, product)
    .map(data => data.json())
    .toPromise();
  }

}
// this.observedProducts.next(products);