import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class GameFindService {

  constructor(private _http: Http) { }

  getGame() {
    console.log('in gameFind service');
    return this._http.get('/api/gameFind/')
    .map(data => data.json())
    // .toPromise();
  }

searchGame(search) {
    console.log('in gameFind service', search);
    return this._http.put('/api/gameFind/', search)
    .map(data => data.json())
    // .toPromise();
  }

  singleSearch(id: String) {
    return this._http.get(`/api/gameFind/${id}`)
    .map(data => data.json())
    // .toPromise();
  }

  addSearchGame(game) {
    console.log('in game service')
    return this._http.post('/api/gameFind/add', game)
    .map(data => data.json())
    .toPromise()
  }

}
