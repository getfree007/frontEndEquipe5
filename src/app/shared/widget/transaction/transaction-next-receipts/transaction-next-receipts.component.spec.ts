import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNextReceiptsComponent } from './transaction-next-receipts.component';

describe('TransactionNextReceiptsComponent', () => {
  let component: TransactionNextReceiptsComponent;
  let fixture: ComponentFixture<TransactionNextReceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNextReceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNextReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
