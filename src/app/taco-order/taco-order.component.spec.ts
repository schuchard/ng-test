import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoOrderComponent } from './taco-order.component';
import { OrderService } from '../order-service.service';
import { StubOrderDisplayComponent, MockOrderService } from '../../test-stubs';

describe('TacoOrderComponent', () => {
  let component: TacoOrderComponent;
  let fixture: ComponentFixture<TacoOrderComponent>;
  let orderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TacoOrderComponent, StubOrderDisplayComponent],
      providers: [{ provide: OrderService, useValue: MockOrderService() }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    orderService = TestBed.get(OrderService);
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

  describe('#submit', () => {
    it('should set the orderStatus', () => {
      const mockOrderReturn = 'mock return order';
      orderService.placeOrder.mockReturnValue(mockOrderReturn);

      expect(component.orderStatus).toBe('');

      component.count = 2;
      component.submit();

      expect(orderService.placeOrder).toHaveBeenCalledWith(2);
      expect(component.orderStatus).toBe(mockOrderReturn);
    });
  });
});
