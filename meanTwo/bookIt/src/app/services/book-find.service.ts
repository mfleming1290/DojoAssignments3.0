import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class BookFindService {

  constructor(private _http: Http) { }

  getBook() {
    console.log('in bookFind service');
    return this._http.get('/api/bookFind/')
    .map(data => data.json())
    // .toPromise();
  }

  searchBook(search) {
    console.log('in bookFind service', search);
    return this._http.put('/api/bookFind/', search)
    .map(data => data.json())
    // .toPromise();
  }

  singleSearch(id: String) {
    return this._http.get(`/api/bookFind/${id}`)
    .map(data => data.json())
    .toPromise();
  }

}
