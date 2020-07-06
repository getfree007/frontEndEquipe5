import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { StatComponent } from './stat/stat.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionStockComponent } from './transaction/transaction-stock/transaction-stock.component';
import { TransactionInvoiceComponent } from './transaction/transaction-invoice/transaction-invoice.component';
import { TransactionNextPaymentsComponent } from './transaction/transaction-next-payments/transaction-next-payments.component';
import { TransactionNextReceiptsComponent } from './transaction/transaction-next-receipts/transaction-next-receipts.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";



@NgModule({
  declarations: [StatComponent, TransactionComponent, TransactionStockComponent, TransactionInvoiceComponent, TransactionNextPaymentsComponent, TransactionNextReceiptsComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [StatComponent, TransactionComponent, TransactionStockComponent, TransactionInvoiceComponent, TransactionNextPaymentsComponent, TransactionNextReceiptsComponent]
})
export class WidgetModule { }
