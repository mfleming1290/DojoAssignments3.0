import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { AppRoutingModule } from "./app-routing.modules";
import { PlayerService } from "./player.service";
import { GameOneComponent } from './player-status/game-one/game-one.component';
import { GameTwoComponent } from './player-status/game-two/game-two.component';
import { GameThreeComponent } from './player-status/game-three/game-three.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerCreateComponent,
    PlayerStatusComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
