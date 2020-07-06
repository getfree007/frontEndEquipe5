import {Component, OnInit} from '@angular/core';

// @ts-ignore
import { profitMargin, higherProfitsChart, bestSellersChart, averageTicketChart, salesChannelChart, circulationChannelsChart } from './data';

import { ChartType } from './saas.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})

export class SaasComponent implements OnInit {

  profitMargin: ChartType;
  higherProfitsChart: ChartType;
  bestSellersChart: ChartType;
  averageTicketChart: ChartType;
  salesChannelChart: ChartType;
  circulationChannelsChart: ChartType;
  averageTicket: string;
  totalSold: string;
  others: any;
  pCode: string;
  productData: any;

  constructor(private modalService: NgbModal) { }
  /**
   * Returns form
   */

  ngOnInit(): void {

    this._fetchData();

    this.others = [
      {
        name: 'B2W',
        icon: '',
        amount: '10',
        revenues: '100',
      },
      {
        name: 'OLX',
        icon: '',
        amount: '40',
        revenues: '350',
      },
      {
        name: 'Loja Física',
        icon: '',
        amount: '50',
        revenues: '600',
      }
    ];

  }

  private _fetchData() {
    this.profitMargin = profitMargin;
    this.higherProfitsChart = higherProfitsChart;
    this.bestSellersChart = bestSellersChart;
    this.averageTicketChart = averageTicketChart;
    this.totalSold = '17332';
    this.averageTicket = '17,96';
    this.salesChannelChart = salesChannelChart;
    this.circulationChannelsChart = circulationChannelsChart;
  }

  openModal(content: any) {

    this.modalService.open(content , { centered: true });
  }

  search(productCode){
    this.pCode = productCode;

    this.productData = [
      {
        amount: '400',
        profit: '3032,43'
      }
    ]
  }
}
