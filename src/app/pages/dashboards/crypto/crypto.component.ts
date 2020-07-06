import { Component, OnInit } from '@angular/core';

import { incomeExpensesChart, totalSaleChart, totalFeeChart } from './data';

import { ChartType } from './crypto.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  incomeExpensesChart: ChartType;
  totalSaleChart: ChartType;
  totalFeeChart: ChartType;

  income: string;
  expenses: string;
  balance: string;
  receive: string;
  pay: string;
  balance2: string;
  totalSale: string;
  totalFee: string;

  transactionsPayments: any;
  transactionsReceipts: any;

  constructor() { }

  ngOnInit(): void {

    this._fetchData();

    this.income   = '450,32';
    this.expenses = '51,32';
    this.balance  = '536,46';

    this.receive  = '450,32';
    this.pay = '51,32';
    this.balance2 = '536,46';

    this.totalSale = '591,56';
    this.totalFee = '45,88';

    this.transactionsPayments = [
      {
        date: '05/07/2020',
        value: '1000',
        description: 'Fornecedor'
      },
      {
        date: '05/07/2020',
        value: '10000',
        description: 'Sálario'
      },
      {
        date: '06/07/2020',
        value: '5000',
        description: 'Aluguel'
      },
      {
        date: '06/07/2020',
        value: '199,99',
        description: 'Manutenção'
      },
      {
        date: '07/07/2020',
        value: '23,44',
        description: 'Despesas'
      },
      {
        date: '07/07/2020',
        value: '123',
        description: 'Despesas'
      },
    ]

    this.transactionsReceipts = [
      {
        date: '05/07/2020',
        value: '1000',
        channel: 'Mercado Livre'
      },
      {
        date: '05/07/2020',
        value: '10000',
        channel: 'Amazon'
      },
      {
        date: '06/07/2020',
        value: '5000',
        channel: 'Loja Física'
      },
      {
        date: '06/07/2020',
        value: '199,99',
        channel: 'Mercado Livre'
      },
      {
        date: '07/07/2020',
        value: '23,44',
        channel: 'Amazon'
      },
      {
        date: '07/07/2020',
        value: '123',
        channel: 'Loja Física'
      },
    ]
  }


  private _fetchData() {
    this.incomeExpensesChart = incomeExpensesChart;
    this.totalSaleChart = totalSaleChart;
    this.totalFeeChart = totalFeeChart;
  }
}
