import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoOrderComponent } from './taco-order.component';
import { StubOrderDisplayComponent } from '../../test/stubs';

describe('TacoOrderComponent', () => {
  let component: TacoOrderComponent;
  let fixture: ComponentFixture<TacoOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TacoOrderComponent, StubOrderDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoOrderComponent);
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
