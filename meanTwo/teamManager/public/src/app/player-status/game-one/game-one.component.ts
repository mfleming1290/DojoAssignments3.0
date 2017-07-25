import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from "../../player.service";
import { Subscription } from "rxjs/Subscription";
import { Player } from "../../player"


@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit, OnDestroy {
  subscription: Subscription
  players: Player[] = []

  constructor(private _playerService: PlayerService) { }

  get() {
    this._playerService.retriveAll()
    .then((players) => {
      this._playerService.updatePlayers(players)
    })
  }

  getPlayers() {
      this.subscription =  this._playerService.obsPlayers.subscribe(
      (players) => {this.players = players}
       )}
  

  ngOnInit() {
    this.get()
    this.getPlayers()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
