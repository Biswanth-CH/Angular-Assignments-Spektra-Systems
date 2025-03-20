import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports:[ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent {
  parentMessage: string = 'Hello from Parent!'; 
  childMessage: string = ''; 

  handleChildEvent(message: string) {
    this.childMessage = message; 
  }
}
