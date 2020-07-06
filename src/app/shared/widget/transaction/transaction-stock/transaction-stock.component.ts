import {Component, Input, OnInit} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-stock',
  templateUrl: './transaction-stock.component.html',
  styleUrls: ['./transaction-stock.component.scss']
})
export class TransactionStockComponent implements OnInit {

  @Input() titles: Array<{
    first?: string;
    second?: number,
    third?: string,
    fourth?: string,
    fifth?: string,
    sixth?: string,
  }>;
  @Input() transactions: Array<{
    announced?: boolean;
    productCode?: number,
    productName?: string,
    amount?: string,
    price?: string,
    stock?: string,
    index?: number,
  }>;

    productCode: number;
    productName: string;
    amount: string;
    price: string;
    stock: string;

  places: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.places = [
      {
        name: 'Mercado Livre',
        icon: '',
      },
      {
        name: 'Amazon',
        icon: '',
      },
      {
        name: 'Loja Física',
        icon: '',
      }
    ];

  }

  openModal(content: any, data: any) {

      this.productCode = data.productCode;
      this.productName = data.productName;
      this.amount      = data.amount;
      this.price       = data.price;
      this.stock       = data.stock;


    this.modalService.open(content , { centered: true });
  }

}
