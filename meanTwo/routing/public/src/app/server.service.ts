import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs'

@Injectable()
export class ServerService {

  constructor(private _http: Http) { }

  storeServers(servers) {
    return this._http.post('/', servers)
    .map(res => res.json())
  }

}
