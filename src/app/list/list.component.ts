import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title: string = "List Component";
  displayable: boolean = false;
  fruits: string[] = ["apple", "orange", "kiwi"];
  newFruit: string = "";

  addFruit() {
    this.fruits.push(this.newFruit);
  }
  delFruit(fruit: string) {
    console.log(`Delete fruit: ${fruit}`);
  }
}
