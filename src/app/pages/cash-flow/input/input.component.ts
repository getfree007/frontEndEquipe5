import { Component, OnInit } from '@angular/core';
import { ChartType } from '../echart.model';
import {lineBarChart} from '../dataCashFlow';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersP } from './cash-flow.model';
import { InputService } from './input.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  cashflow;
  cashflow2;
  cashflowT: OrdersP[];
  breadCrumbItems: Array<{}>;
  term: any;

  lineBarChart: ChartType;
  constructor(private modalService: NgbModal,private dataService: InputService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Orders', active: true }];

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      this.cashflow = data;
      console.log(this.cashflow);
    });
    
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
