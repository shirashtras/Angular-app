import { Component } from '@angular/core';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameBoardComponent, ScoreDisplayComponent, GameControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ball Hitting Game';
}
