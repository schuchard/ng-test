import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoOrderComponent } from './taco-order.component';
import { StubOrderDisplayComponent } from '../../test/stubs';

describe('TacoOrderComponent', () => {
  let component: TacoOrderComponent;
  let fixture: ComponentFixture<TacoOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoOrderComponent, StubOrderDisplayComponent ]
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
