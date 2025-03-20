import { Component } from '@angular/core';

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

@Component({
  selector: 'app-comp3',
  standalone:true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css',
})
export class Comp3Component {
  user: User;

  constructor() {
    this.user = new User('Biswanth Ch', 20);
  }
}
