import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Bicycle } from '../bicycle'

@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }

  getBikes(): Promise<Bicycle[]> {
    return this._http.get('/api/bicycles')
    .map(data => data.json())
    .toPromise();
  }

  getBike(id: String): Promise<Bicycle> {
    return this._http.get(`/api/bicycles/${id}`)
    .map(data => data.json())
    .toPromise();
  }

  addBike(bike: Bicycle): Promise<Bicycle> {
    console.log('in service')
    return this._http.post('/api/bicycles', bike)
    .map(data => data.json())
    .toPromise()
  }

  removeBike(id: string): Promise<Bicycle> {
    return this._http.delete(`/api/bicycles/${ id } `)
    .map(data => data.json())
    .toPromise()
  }

  updateBike(book: Bicycle): Promise<Bicycle> {
    return this._http.put(`/api/bicycles/${ book._id } `, book)
    .map(data => data.json())
    .toPromise()
  }

  getBikesById() {
    console.log('in service')
    return this._http.get('/api/bicycles/listing')
    .map(data => data.json())
    .toPromise()
  }

  findOne() {
    console.log('in service')
    return this._http.get('/api/bicycles/random')
    .map(data => data.json())
    .toPromise()
  }

}
