import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css'],
})
export class OrderDisplayComponent implements OnInit {
  @Input()
  quantity;

  @Input()
  type;

  constructor() {}

  ngOnInit() {}
}
