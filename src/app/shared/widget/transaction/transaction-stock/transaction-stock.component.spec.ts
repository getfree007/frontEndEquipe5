import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStockComponent } from './transaction-stock.component';

describe('TransactionStockComponent', () => {
  let component: TransactionStockComponent;
  let fixture: ComponentFixture<TransactionStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
