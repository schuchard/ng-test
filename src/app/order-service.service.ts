import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  placeOrder(quantity: number) {
    return 'Order Placed:' + quantity;
  }
}
