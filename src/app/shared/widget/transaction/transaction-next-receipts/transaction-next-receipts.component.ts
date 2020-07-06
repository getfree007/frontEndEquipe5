import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction-next-receipts',
  templateUrl: './transaction-next-receipts.component.html',
  styleUrls: ['./transaction-next-receipts.component.scss']
})
export class TransactionNextReceiptsComponent implements OnInit {

  @Input() transactionsReceipts: Array<{
    value?: string,
    channel?: string,
    date?: string,
  }>;

  total: any;

  constructor() { }

  ngOnInit(): void {

    this.total = '12.345,99';

  }

}
