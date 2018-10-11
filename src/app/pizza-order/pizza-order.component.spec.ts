import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrderComponent } from './pizza-order.component';
import { StubOrderDisplayComponent } from '../../test/stubs';

describe('PizzaOrderComponent', () => {
  let component: PizzaOrderComponent;
  let fixture: ComponentFixture<PizzaOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaOrderComponent, StubOrderDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#add', () => {
    it('should increment count', () => {
      component.count = 0;

      component.add();
      component.add();
      component.add();

      expect(component.count).toBe(3);
    });
  });

  describe('#remove', () => {
    it('should decrement count', () => {
      component.count = 5;

      component.remove();

      expect(component.count).toBe(4);
    });

    it('should not decrement below 0', () => {
      component.count = 1;

      component.remove();
      component.remove();
      component.remove();

      expect(component.count).toBe(0);
    });
  });
});
