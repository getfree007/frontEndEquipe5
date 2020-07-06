import { Component, OnInit } from '@angular/core';
import { ChartType } from '../echart.model';
import {lineBarChart} from '../dataCashFlow';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  cashflow;
  cashflow2;
  cashfloworders;
  breadCrumbItems: Array<{}>;
  term: any;

  totalsum:number;

  lineBarChart: ChartType;
  constructor(private modalService: NgbModal) { 
    this.totalsum = 1256.3;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Orders', active: true }];

    this.cashflow = [
      {
        id: '#6',
        name: 'Thor Fernandes',
        date: '09-07-2020',
        total: 'R$ 400',
        status: 'Pago',
        quantity: '10',
        marketplace: ['Mercado Livre'],
        index: 1,
      },
      {
        id: '7',
        name: 'Jamal Burnett',
        date: '10-07-2020',
        total: 'R $380',
        status: 'Estornado',
        quantity: '10',
        marketplace: ['B2W'],
        index: 2,
      },
      {
        id: '9',
        name: 'Juan Mitchell',
        date: '11-07-2020',
        total: '$384',
        status: 'Pago',
        quantity: '10',
        marketplace: ['Magalu'],
        index: 3,
      },
      {
        id: '11',
        name: 'Barry Dick',
        date: '12-07-2020',
        total: '$412',
        status: 'À Receber',
        quantity: '10',
        marketplace: ['Via Varejo'],
        index: 4,
      },
      {
        id: '13',
        name: 'Ronald Taylor',
        date: '09-07-2020',
        total: '$404',
        status: 'À Receber',
        quantity: '10',
        marketplace: ['Amazon'],
        index: 5,
      },
    ];

    this.cashflow2= [
      {
        id: '4',
        name: 'Thor Fernandes',
        date: '09-07-2020',
        total: 'R$ 400',
        status: 'Pago',
        quantity: '10',
        marketplace: ['Mercado Livre'],
        index: 1,
      },
      {
        id: '5',
        name: 'Jamal Burnett',
        date: '09-07-2020',
        total: 'R $380',
        status: 'Estornado',
        quantity: '10',
        marketplace: ['B2W'],
        index: 2,
      },
      {
        id: '7',
        name: 'Juan Mitchell',
        date: '09-07-2020',
        total: '$384',
        status: 'Pago',
        quantity: '10',
        marketplace: ['Magalu'],
        index: 3,
      },
      {
        id: '8',
        name: 'Barry Dick',
        date: '09-07-2020',
        total: '$412',
        status: 'À Receber',
        quantity: '10',
        marketplace: ['Via Varejo'],
        index: 4,
      },
      {
        id: '9',
        name: 'Ronald Taylor',
        date: '09-07-2020',
        total: '$404',
        status: 'À Receber',
        quantity: '10',
        marketplace: ['Amazon'],
        index: 5,
      },
      {
        id: '10',
        name: 'Jacob Hunter',
        date: '09-07-2020',
        total: 'R$392',
        status: 'Paid',
        quantity: '10',
        marketplace: ['B2W'],
        index: 6,
      },
    ];
    this.cashfloworders = [
      {
        id: '2',
        name: 'Thor Fernandes',
        date: '11-07-2020',
        total: 'R$ 410',
        status: 'Pago',
        quantity: '10',
        index: 1,
      },
      {
        id: '4',
        name: 'Jamal Burnett',
        date: '13-07-2020',
        total: 'R $380',
        status: 'Estornado',
        quantity: '10',
  
        index: 2,
      },
      {
        id: '7',
        name: 'Juan Mitchell',
        date: '15-07-2020',
        total: '$384',
        status: 'Pago',
        quantity: '10',
 
        index: 3,
      },
      {
        id: '8',
        name: 'Barry Dick',
        date: '16-07-2020',
        total: '$412',
        status: 'À Receber',
        quantity: '10',

        index: 4,
      },
      {
        id: '10',
        name: 'Ronald Taylor',
        date: '19-07-2020',
        total: '$404',
        status: 'À Receber',
        quantity: '10',

        index: 5,
      },
      {
        id: '13',
        name: 'Jacob Hunter',
        date: '21-07-2020',
        total: 'R$392',
        status: 'Paid',
        quantity: '10',

        index: 6,
      },
    ];
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'E - Chart', active: true }];

    this._fetchData();
  }

  private _fetchData() {
    this.lineBarChart = lineBarChart;
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'l', backdrop: 'static' });
  }

}

