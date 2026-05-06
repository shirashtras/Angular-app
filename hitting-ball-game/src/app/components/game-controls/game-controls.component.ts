import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {
  constructor(private gameService: GameService) {}

  startGame() {
    this.gameService.startGame();
  }

  resetGame() {
    this.gameService.resetGame();
  }
}