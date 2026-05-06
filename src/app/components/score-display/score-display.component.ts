import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-score-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-display.component.html',
  styleUrl: './score-display.component.css'
})
export class ScoreDisplayComponent implements OnInit {
  score = 0;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.score$.subscribe(score => {
      this.score = score;
    });
  }
}