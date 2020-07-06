import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNextPaymentsComponent } from './transaction-next-payments.component';

describe('TransactionNextPaymentsComponent', () => {
  let component: TransactionNextPaymentsComponent;
  let fixture: ComponentFixture<TransactionNextPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNextPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNextPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
