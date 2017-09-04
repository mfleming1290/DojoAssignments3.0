import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameFindService } from "../../services/game-find.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
// import { BookFindService } from "../services/book-find.service";
// import { Book } from "../book";


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  game
  newGame
  subscription: Subscription;
  addedGame;

  constructor(private gameFindService: GameFindService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getGames()
  }

  getGames() {
    this.subscription = this.route.paramMap
      .switchMap(param => 
       this.gameFindService.singleSearch(param.get('id'))
      )
      .subscribe((game) => {
        console.log('game', game.body)
        this.game = game.body[0]
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(game) {
    this.gameFindService.addSearchGame(game)
    .then(game => this.router.navigate(['/']))
  }

}
