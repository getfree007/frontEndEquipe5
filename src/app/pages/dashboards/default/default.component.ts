import { Component, OnInit } from '@angular/core';

import { emailSentBarChart, monthlyEarningChart, transactions, statData } from './tabledata/chartdata';
import { lineChart, pieChart, customPieChart, gradientBarChart, gaugeChart, lineBarChart, donughnutChart, bubbleChart } from './tabledata/echartdata';


import { NumberValueAccessor } from '@angular/forms';
import { ChartType } from './tabledata/apex.model';

import {
  linewithDataChart, basicColumChart, columnlabelChart, lineColumAreaChart,
  basicRadialBarChart, simplePieChart, donutChart, barChart, splineAreaChart, dashedLineChart
} from './tabledata/apexdata';

import { ChartistType } from './tabledata/chartist.model';


import {
  // tslint:disable-next-line: max-line-length
  simpleLineChart, lineScatter, areaLineChart, overlappingBarChart, stackBarChart, horizontalBarChart,
  donutAnimateChart
} from './tabledata/chartistdata';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {


  breadCrumbItems: Array<{}>;
  income:number;
  outcome: number;
  saldo:number;
  percentage:number;
  lastmonth:Number;
  paymentstodo:number;
  paymentstoreceive:number;
  totaltoreceive:number;
  norders: number;
  paymentsc : number;
  paymentsp: number;
  paymentse :number;
  sales:number;
  tax:number;


  lineChart: ChartType;
  barChart: ChartType;
  donutChart: ChartType;
  stackBarChart: ChartistType;
  gaugeChart:ChartType;

  constructor() {
    this.income = 2453.35;
    this.outcome = 851.35;
    this.saldo = this.income-this.outcome;
    this.percentage = 5;
    this.lastmonth = 2438.25;
    this.paymentstoreceive = 450.32;
    this.paymentstodo = 51.32;
    this.totaltoreceive = this.paymentstoreceive-this.paymentstodo;
    this.norders = 100;
    this.paymentsc = 50;
    this.paymentsp = 32;
    this.paymentse = 18;
    this.sales = 1359.45;
    this.tax = 234.32;
   }
   
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Apex charts', active: true }];
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartist chart', active: true }];

    /**
     * Fetches the data
     */
    this.fetchData()
    {
      
    }
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.lineChart = lineChart;
    this.barChart = barChart;
    this.donutChart = donutChart;
    this.stackBarChart = stackBarChart;
    this.gaugeChart = gaugeChart;
    

}

}
