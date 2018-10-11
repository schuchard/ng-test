import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoOrderComponent } from './taco-order.component';

describe('TacoOrderComponent', () => {
  let component: TacoOrderComponent;
  let fixture: ComponentFixture<TacoOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
