import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo2',
  imports: [FormsModule],
  standalone: true,

  templateUrl: './compo2.component.html',
  styleUrl: './compo2.component.css',
})
export class Compo2Component {
  inputText: string = '';
}
