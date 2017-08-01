import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Author } from "../author";

@Injectable()
export class AuthorService {

  constructor(private _http: Http) { }

  getAuthors(): Promise<Author[]> {
    return this._http.get('/api/author')
    .map(res => res.json())
    .toPromise()
  }

  createAuthor(author: Author) {
    return this._http.post('/api/author', author)
    .map(res => res.json())
    .toPromise()
  }

  getAuthor(id) {
    console.log(' in service ')
    return this._http.get(`/api/author/${id}`)
      .map(res => res.json())
      .toPromise()
  }

  updateAuthor(author: Author): Promise<Author> {
    return this._http.put(`/api/author/${ author._id } `, author)
    .map(data => data.json())
    .toPromise()
  }

  removeAuthor(id: string): Promise<Author> {
    console.log('in service')
    return this._http.delete(`/api/author/${ id } `)
    .map(data => data.json())
    .toPromise()
  }

}
