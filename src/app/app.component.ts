import { Component } from '@angular/core';
import { Les1Component } from './les1/les1.component';
@Component({
  selector: 'app-root',
  imports: [Les1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-app';
  p="המשימות שלי:"

}
