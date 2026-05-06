import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',   
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent implements OnInit, OnDestroy {
  ballPosition = { x: 50, y: 50 };
  ballSize = 30;
  gameActive = true;
  private gameStatusSubscription: Subscription = new Subscription();

  
  constructor(private gameService: GameService) {}

  
  ngOnInit() {
    this.gameService.ballPosition$.subscribe(pos => {
      this.ballPosition = pos;
    });
    
    // הוסף מנוי לסטטוס המשחק
    this.gameStatusSubscription = this.gameService.gameStatus$.subscribe(status => {
      this.gameActive = status === 'running';
    });
    
    this.startBallMovement();
  }

  ngOnDestroy() {
    // בטל את המנוי כדי למנוע דליפות זיכרון
    this.gameStatusSubscription.unsubscribe();
  }

  startBallMovement() {
    setInterval(() => {
      if (this.gameActive) {
        const randomX = Math.random() * 85;
        const randomY = Math.random() * 85;
        this.gameService.updateBallPosition(randomX, randomY);
      }
    }, 1500);
  }

  hitBall() {
    if (this.gameActive) {
      this.gameService.updateScore(10);
    }
  }
}