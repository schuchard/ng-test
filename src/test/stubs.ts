import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-display',
  template: '',
})
export class StubOrderDisplayComponent {
  @Input()
  quantity;

  @Input()
  type;
}

export const MockOrderService = () => {
  return {
    placeOrder: jest.fn(),
  };
};
