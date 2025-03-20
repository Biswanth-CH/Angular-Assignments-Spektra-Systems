import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input() messageFromParent: string = ''; 
  @Output() notifyParent = new EventEmitter<string>(); 

  sendMessageToParent() {
    this.notifyParent.emit('Hello from Child!');
  }
}
