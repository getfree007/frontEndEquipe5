import { Component, OnInit } from '@angular/core';

import { stockBestSellingProductsBarChart } from './data';
import { ChartType } from './my-stock.model';
import { MyStockService } from './my-stock.service';

@Component({
  selector: 'app-my-stock',
  templateUrl: './my-stock.component.html',
  styleUrls: ['./my-stock.component.scss']
})
export class MyStockComponent implements OnInit {

  transactions: any;
  titles: any;
  term: any;
  stockless: any;
  littleStock: any;
  stockBestSellingProductsBarChart: ChartType;
  topSellingProducts: any;
  color: string;

  constructor(private dataService: MyStockService) { }

  ngOnInit(): void {


    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      this.transactions = data;
      console.log(this.transactions);
    });

    this.titles = [
      {
        first: 'Cód. Produto',
        second: 'Nome Produto',
        third: 'Quantidade',
        fourth: 'Preço',
        fifth: 'Estoque',
        sixth: 'Anunciado',
      },
    ];

    this.littleStock = [
      {
        productName: 'Camiseta Vermelha',
        amount: '1',
      },
      {
        productName: 'Camiseta Azul',
        amount: '2',
      },
      {
        productName: 'Camiseta Amarela',
        amount: '1',
      },
    ];

    this.stockless = [
      {
        productName: 'Camiseta Vermelha',
        time: 'Há 5 dias',
      },
      {
        productName: 'Camiseta Azul',
        time: 'Há 3 dias',
      },
      {
        productName: 'Camiseta Amarela',
        time: 'Há 1 hora',
      },
    ];

    this.topSellingProducts = [
      {
        productAmount: 5,
        productName: 'Camiseta'
      },
      {
        productAmount: 10,
        productName: 'Corta vento'
      },
      {
        productAmount: 15,
        productName: 'Bermuda'
      }
    ]

  }

}
