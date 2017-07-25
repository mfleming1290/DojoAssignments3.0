import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  retrieveWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b628b88a922fb9217a4a3ad5af59ae20`)
    .map( data => data.json() )
    .toPromise()
 }

}
