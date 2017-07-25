import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Player } from "./player";
import 'rxjs'


@Injectable()
export class PlayerService {
  obsPlayers = new BehaviorSubject(null);
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  updatePlayers(players){
    this.obsPlayers.next(players);
  }

  constructor(private _http: Http) { }


  retriveAll() {
    return this._http.get('/players')
    .map(data => data = data.json())
    .toPromise()
  }

  create(player) {
    return this._http.post('/players', player)
    .map(data => data = data.json())
    .toPromise()
  }

  deletePlayer(player) {
    console.log('service',player);
    return this._http.delete(`/players/${player._id}`, this.options)
    .map(data => data = data.json())
    .toPromise()
  }


  // delete(id) {
  //   console.log('this is',id)
  //       this._http.delete('/players/'+id)}
    
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // console.log(player._id);
    // let url = `/players/${player._id}`
    
    // return this._http.delete('/players/'+id)


}
