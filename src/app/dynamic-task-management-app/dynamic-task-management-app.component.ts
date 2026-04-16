import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dynamic-task-management-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-task-management-app.component.html',
  styleUrl: './dynamic-task-management-app.component.css'
})
export class DynamicTaskManagementAppComponent {
    name:string="שירה"

  tasks: {nameOfTask:string, description:string,dueDate:Date,isComplete:boolean}[]=[
    {nameOfTask :"קניות", description:"לקנות חלב, לחם וביצים", dueDate:new Date('2024-07-01'), isComplete:false},
    {nameOfTask:"ללמוד Angular", description:"לסיים את הקורס של Angular עד סוף החודש", dueDate:new Date('2024-07-31'), isComplete:false},
    {nameOfTask:"לנקות את הבית", description:"לנקות את הסלון, המטבח והחדרים", dueDate:new Date('2024-07-05'), isComplete:true}  
  ]
}
