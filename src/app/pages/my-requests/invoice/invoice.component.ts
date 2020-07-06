import { Component, OnInit } from '@angular/core';
import { ChartType } from '../echart.model';
import {barChart} from '../dataRequest';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
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

  constructor(private dataService: InvoiceService) { 
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


