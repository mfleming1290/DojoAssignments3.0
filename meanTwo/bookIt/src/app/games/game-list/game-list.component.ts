import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { SearchPipe } from "../../search.pipe";
import { PagerService } from '../../services/pager.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // array of all items to be paged
    private allItems: any[];
    games;
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems;

    // searchgame = [];
    foundGames

    selectedGame

  constructor(private router: Router, private pagerService: PagerService,  private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
        this.getPages()
  }

  getPages() {
        this.gameService.getPage()
        .then(data => {
            console.log('getting pages from the server');
            this.allItems = data;
 
                // initialize to page 1
                this.setPage(1);
        })
        .catch(console.log)
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    getGames() {
        this.gameService.getGames()
        .then(games => {
            console.log('getting games from the server');
            
            this.games = games;
        })
        .catch(console.log)
    }

    

    selectGame(game) {
        this.selectedGame = game === this.selectedGame ? null: game;        
    }

    dataFromNewGame(newGame) {
        console.log('working');   
        this.games.push(newGame)
    }

    tdClick(event: Event) {
        event.stopPropagation();
    }

    deleteGame(game) {
        console.log('in del game ', game, game._id);     
        this.gameService.removeGame(game._id)
        .then(() => this.router.navigate(['/games/new']))
        .catch(console.log)
        
    }

    updateSelectedGame(game) {
        console.log('updating game', game);
        this.games.splice(this.games.indexOf(this.selectedGame), 1, game)
    }

}
