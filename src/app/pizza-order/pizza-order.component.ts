import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css'],
})
export class PizzaOrderComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit() {}

  add() {
    this.count += 1;
  }

  remove() {
    if (this.count === 0) {
      this.count = 0;
    } else {
      this.count -= 1;
    }
  }
}
