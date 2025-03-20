import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component'; // Import the component
import { Compo2Component } from './compo2/compo2.component';
import { Comp3Component } from './comp3/comp3.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Comp5Component } from './comp5/comp5.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Comp1Component,Compo2Component,Comp3Component,ParentComponentComponent,Comp5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-2';
}
