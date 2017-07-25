import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerService } from "../player.service";
import { Subscription } from "rxjs/Subscription";
import { Player } from "../player"


@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit, OnDestroy {
  subscription: Subscription
  players: Player[] = []

  constructor(private _playerService: PlayerService) { }

  getplayers() {
    this.subscription = this._playerService.obsPlayers.subscribe(
      (players) => {this.players = players},
      (err) => {console.log(err);},
        () => { }
    )
  }

  ngOnInit() {
    this.getplayers()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
