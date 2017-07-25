import { Component, OnInit } from '@angular/core';
import { Player } from "../player";
import { PlayerService } from "../player.service";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = new Player();
  constructor(private _playerService: PlayerService) { }

  onSubmit() {
    console.log(this.player);
    
    this._playerService.create(this.player)
    this._playerService.retriveAll()
      .then((players) => { this._playerService.updatePlayers(players) })
    this.player = new Player()


  }

  ngOnInit() {
  }

}
