import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transactions: Array<{
    clientCode?: string,
    requestCode?: string,
    date?: string,
    statusRequest?: string,
    statusPayment?: string,
    value?: string[],
  }>;

  requestCode: string;
  value: string;
  productImagem: any;
  productAmount: string;
  productCode: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, data: any) {
    this.requestCode = data.requestCode;
    this.value  = data.value;
    this.productImagem = 'assets/images/product/img-7.png';
    this.productAmount = '1';
    this.modalService.open(content , { centered: true });
    this.productCode = '0001';
  }

}
