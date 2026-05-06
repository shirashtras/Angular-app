import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameState: Game = { score: 0, isPlaying: false };
  private gameStateSubject = new BehaviorSubject<Game>(this.gameState);

  gameState$ = this.gameStateSubject.asObservable();

  startGame() {
    this.gameState = { score: 0, isPlaying: true };
    this.gameStateSubject.next(this.gameState);
  }

  updateScore(points: number) {
    if (this.gameState.isPlaying) {
      this.gameState.score += points;
      this.gameStateSubject.next(this.gameState);
    }
  }

  resetGame() {
    this.gameState = { score: 0, isPlaying: false };
    this.gameStateSubject.next(this.gameState);
  }
}