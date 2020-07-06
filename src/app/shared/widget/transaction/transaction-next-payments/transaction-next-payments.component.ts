import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction-next-payments',
  templateUrl: './transaction-next-payments.component.html',
  styleUrls: ['./transaction-next-payments.component.scss']
})
export class TransactionNextPaymentsComponent implements OnInit {

  @Input() transactionsPayments: Array<{
    value?: string,
    description?: string,
    date?: string,
  }>;

  total: any;

  constructor() { }

  ngOnInit(): void {

    this.total = '12.345,99';
  }

}
