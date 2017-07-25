import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-score-component',
  templateUrl: './score-component.component.html',
  styleUrls: ['./score-component.component.css']
})
export class ScoreComponentComponent implements OnInit {
  name: string;
  final: number;
  error: string;

  constructor(private _httpService: HttpService) { }

  getUserScore(userScore) {
    this.final = userScore.public_repos + userScore.followers;
  }

  getScore(name) {    
    this._httpService.retrieveScore(name)
    .then(score => {  console.log(score); this.getUserScore(score); this.error=''})
    .catch( err => { this.error = err } )
  }

  onSubmit(name) {
    this.getScore(name)
  }

  ngOnInit() {
  }

}
