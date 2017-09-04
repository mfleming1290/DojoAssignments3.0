import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { PagerService } from "../services/pager.service";


@Injectable()
export class GameService {

  constructor(private _http: Http, private pagerService: PagerService) { }
  
  getGames() {
    console.log('in Games');
    return this._http.get('/api/games')
    .map(data => data.json())
    .toPromise();
  }

  getGame(id: String){
    return this._http.get(`/api/games/${id}`)
    .map(data => data.json())
    .toPromise();
  }

  addGame(game) {
    return this._http.post('/api/games', game)
    .map(data => data.json())
    .toPromise()
  }

  removeGame(id: string) {
    return this._http.delete(`/api/games/${ id } `)
    .map(data => data.json())
    .toPromise()
  }

  updateGame(game) {
    return this._http.put(`/api/games/${ game._id } `, game)
    .map(data => data.json())
    .toPromise()
  }

  getPage() {
    console.log('in page');
    return this._http.get('/api/games')
    .map(data => data.json())
    .toPromise();
  }

  addSearchGame(game) {
    return this._http.post('/api/games/add', game)
    .map(data => data.json())
    .toPromise()
  }

}
