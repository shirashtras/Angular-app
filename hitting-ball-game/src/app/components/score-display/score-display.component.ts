import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  score: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.scoreObservable.subscribe(newScore => {
      this.score = newScore;
    });
  }
}