import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-controls.component.html',
  styleUrl: './game-controls.component.css'
})
export class GameControlsComponent {
  constructor(private gameService: GameService) {}

  resetGame() {
    this.gameService.resetScore();
    this.gameService.updateGameStatus('reset');
  }

  pauseGame() {
    this.gameService.updateGameStatus('paused');
  }

  resumeGame() {
    this.gameService.updateGameStatus('running');
  }
}