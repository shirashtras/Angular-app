import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  gameState: any;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameState = this.gameService.getGameState();
  }

  onHit(): void {
    this.gameService.updateScore();
    this.gameState = this.gameService.getGameState();
  }

  resetGame(): void {
    this.gameService.resetGame();
    this.gameState = this.gameService.getGameState();
  }
}