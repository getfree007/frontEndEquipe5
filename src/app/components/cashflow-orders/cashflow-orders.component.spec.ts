import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowOrdersComponent } from './cashflow-orders.component';

describe('CashflowOrdersComponent', () => {
  let component: CashflowOrdersComponent;
  let fixture: ComponentFixture<CashflowOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashflowOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
