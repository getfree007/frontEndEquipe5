import { Component, OnInit } from '@angular/core';
import { ChartType } from '../echart.model';
import {barChart} from '../dataRequest';
import { MyOrdersService } from './my-orders.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  term: any;
  transactions: any;
  norders: number;
  paymentsc : number;
  paymentsp: number;
  paymentse :number;
  gtags:number
  ptags: number;
  ltags: number;
  etags: number;

  constructor(private dataService: MyOrdersService) {
    this.norders = 100;
    this.paymentsc = 50;
    this.paymentsp = 32;
    this.paymentse = 18;
    this.gtags = 50;
    this.ptags = 25;
    this.ltags = 18;
    this.etags = 7;
   }
   barChart: ChartType;

  ngOnInit(): void {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      this.transactions = data;
      console.log(data);
    }) ;


    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];
    this._fetchData();
  }
  private _fetchData() {
    this.barChart = barChart;
  }
}