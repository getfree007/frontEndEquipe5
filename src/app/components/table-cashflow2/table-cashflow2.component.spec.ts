import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCashflow2Component } from './table-cashflow2.component';

describe('TableCashflow2Component', () => {
  let component: TableCashflow2Component;
  let fixture: ComponentFixture<TableCashflow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCashflow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCashflow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
