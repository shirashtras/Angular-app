import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private scoreSubject = new BehaviorSubject<number>(0);
  private gameStatusSubject = new BehaviorSubject<string>('running');
  private ballPositionSubject = new BehaviorSubject<{ x: number; y: number }>({ x: 50, y: 50 });

  
  score$ = this.scoreSubject.asObservable();
  gameStatus$ = this.gameStatusSubject.asObservable();
  ballPosition$ = this.ballPositionSubject.asObservable();

  updateScore(points: number) {
    this.scoreSubject.next(this.scoreSubject.value + points);
  }

  resetScore() {
    this.scoreSubject.next(0);
  }

  updateGameStatus(status: string) {
    this.gameStatusSubject.next(status);
  }

  updateBallPosition(x: number, y: number) {
    this.ballPositionSubject.next({ x, y });
  }
}