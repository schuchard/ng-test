import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taco-order',
  templateUrl: './taco-order.component.html',
  styleUrls: ['./taco-order.component.css'],
})
export class TacoOrderComponent implements OnInit {
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
