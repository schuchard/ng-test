import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDisplayComponent } from '../order-display/order-display.component';
import { TacoOrderComponent } from './taco-order.component';

describe('TacoOrderComponent', () => {
  let component: TacoOrderComponent;
  let fixture: ComponentFixture<TacoOrderComponent>;
  let tacoOrderEl: HTMLElement;
  let orderDisplayEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TacoOrderComponent, OrderDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    tacoOrderEl = fixture.nativeElement;
    orderDisplayEl = fixture.nativeElement.querySelector('app-order-display');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add Tacos', () => {
    it('should increment count', () => {
      const addTaco = tacoOrderEl.querySelectorAll('button')[0];

      addTaco.click();
      addTaco.click();
      addTaco.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 3 tacos');
    });
  });

  describe('Remove Tacos', () => {
    it('should decrement count', () => {
      const removeTaco = tacoOrderEl.querySelectorAll('button')[1];
      component.count = 5;

      removeTaco.click();
      removeTaco.click();
      removeTaco.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 2 tacos');
    });

    it('should not decrement below 0', () => {
      const removeTaco = tacoOrderEl.querySelectorAll('button')[1];
      component.count = 1;

      removeTaco.click();
      removeTaco.click();
      removeTaco.click();

      fixture.detectChanges();
      expect(orderDisplayEl.textContent).toBe('Order total: 0 tacos');
    });
  });
});
