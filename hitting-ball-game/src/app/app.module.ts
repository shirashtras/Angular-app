import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ScoreDisplayComponent,
    GameControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }