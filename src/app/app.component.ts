import { Component } from '@angular/core';
import { IdeasManagerComponent } from './ideas-manager/ideas-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IdeasManagerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
