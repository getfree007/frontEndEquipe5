import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCashflowComponent } from './table-cashflow.component';

describe('TableCashflowComponent', () => {
  let component: TableCashflowComponent;
  let fixture: ComponentFixture<TableCashflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCashflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
