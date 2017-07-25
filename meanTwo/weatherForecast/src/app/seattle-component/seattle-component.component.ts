import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";


@Component({
  selector: 'app-seattle-component',
  templateUrl: './seattle-component.component.html',
  styleUrls: ['./seattle-component.component.css']
})
export class SeattleComponentComponent implements OnInit {
  weather;
  humidity;
  temperatureAvg;
  temperatureHigh;
  temperatureLow;
  status;

  constructor(private _weatherService: WeatherService) { }

  

  ngOnInit() {
    this.weather = this._weatherService.retrieveWeather('seattlewa')
    .then(weather => {
      this.weather = weather
      this.humidity = weather.main.humidity
      this.temperatureAvg = Math.floor(weather.main.temp * (9 / 5) - 459.67)
      this.temperatureHigh = Math.floor(weather.main.temp_max * (9 / 5) - 459.67)
      this.temperatureLow = Math.floor(weather.main.temp_min * (9 / 5) - 459.67)
      this.status = weather.weather[0].description
    })
    .catch(err => {console.log(err);})
  
  }

}
