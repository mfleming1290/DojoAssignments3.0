import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerCreateComponent } from "./player-create/player-create.component";
import { AppComponent } from "./app.component";
import { PlayerStatusComponent } from "./player-status/player-status.component";
import { GameOneComponent } from "./player-status/game-one/game-one.component";
import { GameTwoComponent } from "./player-status/game-two/game-two.component";
import { GameThreeComponent } from "./player-status/game-three/game-three.component";




const routes: Routes = [
    { path:'players/new', component: PlayerCreateComponent },  
    { path:'players/list', component: PlayerListComponent },
    { path:'players/status', component: PlayerStatusComponent, children:[
        {path:'gameOne', component: GameOneComponent},
        {path:'gameTwo', component: GameTwoComponent},
        {path:'gameThree', component: GameThreeComponent}

    ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }