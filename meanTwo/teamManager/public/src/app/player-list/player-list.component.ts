import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Player } from "../player";
import { PlayerService } from "../player.service";



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  players: Player[] =[]
  

  constructor(private _playerService: PlayerService ) { }

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

  deletePlayer(player){
    if (window.confirm('Are you sure you want to permanently delete this item?')) {

    console.log(player);
    this._playerService.deletePlayer(player)
    const idx = this.players.indexOf(player);
    this.players.splice(idx, 1);
    this._playerService.updatePlayers(this.players)
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
