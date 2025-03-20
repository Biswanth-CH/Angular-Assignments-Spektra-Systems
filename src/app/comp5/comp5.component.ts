import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp5',
  imports: [CommonModule],
  templateUrl: './comp5.component.html',
  styleUrl: './comp5.component.css',
})
export class Comp5Component {
  showMessage: boolean = true;
  items: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];
  isHighlighted: boolean = true; 
}

