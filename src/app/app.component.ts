import { Component } from '@angular/core';
import { DynamicTaskManagementAppComponent } from './dynamic-task-management-app/dynamic-task-management-app.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicTaskManagementAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
