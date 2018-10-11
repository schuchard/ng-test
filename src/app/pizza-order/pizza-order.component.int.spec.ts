import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderComponent } from './pizza-order.component';
import { OrderDisplayComponent } from '../order-display/order-display.component';

describe('PizzaOrderComponent', () => {
  let component: PizzaOrderComponent;
  let fixture: ComponentFixture<PizzaOrderComponent>;
  let pizzaOrderEl: HTMLElement;
  let orderDisplayEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaOrderComponent, OrderDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pizzaOrderEl = fixture.nativeElement;
    orderDisplayEl = fixture.nativeElement.querySelector('app-order-display');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add Pizzas', () => {
    it('should increment count', () => {
      const addPizza = pizzaOrderEl.querySelectorAll('button')[0];

      addPizza.click();
      addPizza.click();
      addPizza.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 3 pizzas');
    });
  });

  describe('Remove Pizzas', () => {
    it('should decrement count', () => {
      const removePizza = pizzaOrderEl.querySelectorAll('button')[1];
      component.count = 5;

      removePizza.click();
      removePizza.click();
      removePizza.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 2 pizzas');
    });

    it('should not decrement below 0', () => {
      const removePizza = pizzaOrderEl.querySelectorAll('button')[1];
      component.count = 1;

      removePizza.click();
      removePizza.click();
      removePizza.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 0 pizzas');
    });
  });
});
