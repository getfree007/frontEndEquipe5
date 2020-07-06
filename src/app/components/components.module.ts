import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';
import { TableCashflowComponent } from './table-cashflow/table-cashflow.component';
import { TableCashflow2Component } from './table-cashflow2/table-cashflow2.component';
import { CashflowOrdersComponent } from './cashflow-orders/cashflow-orders.component';



@NgModule({
  declarations: [TableCashflowComponent, TableCashflow2Component, CashflowOrdersComponent],
  imports: [
    CommonModule,
    UIModule,
    WidgetModule,
    NgbModalModule
  ],
  exports: [TableCashflowComponent, TableCashflow2Component, CashflowOrdersComponent ]
})
export class ComponentsModule { }
