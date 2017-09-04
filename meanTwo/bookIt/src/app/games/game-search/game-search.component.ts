import { Component, OnInit } from '@angular/core';
import { GameFindService } from "../../services/game-find.service";
import { Router } from "@angular/router";
import { Search } from "../../search";


@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  foundGames;
  search: Search = new Search();


  constructor(private router: Router,private gameFindService: GameFindService) { }

  test() {
    console.log('in test component')
    return this.gameFindService.getGame()
    .subscribe(games => {
          console.log(games)
          this.foundGames = games.body
          //  for (var key in games) {
          //       if (games.hasOwnProperty(key)) {
          //            console.log(key + " -> " + games[key]);
          //            this.foundGames.push(games[key]);
          //       }
          //       console.log(this.foundGames)
          //  }
        })
  }

  hack(val) {
  return Array.from(val);
  } 



onSubmit(search){
    console.log('submitting', search);
    this.gameFindService.searchGame(search)
        .subscribe(games => {
            console.log(games)
            this.foundGames = games.body
        })
  }

  findGame(game) {
        console.log('in find game ', game.id);      
        // this.bookService.removeBook(book._id)
       this.router.navigate(['/games', 'search', game.id])
        
    }

  ngOnInit() {
  }

}
