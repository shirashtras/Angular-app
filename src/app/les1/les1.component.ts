import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-les1',
  imports: [FormsModule],
  templateUrl: './les1.component.html',
  styleUrl: './les1.component.css'
})
export class Les1Component {
  name:string="שירה"
  task:string="שיעורי בית"
  keep:string=""
  flag:boolean=false;

  save(){
    this.task=this.keep;
    this.keep=""
  if(this.task=="")
    this.flag=!this.flag
  }
}
