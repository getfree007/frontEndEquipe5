import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-transaction-invoice',
  templateUrl: './transaction-invoice.component.html',
  styleUrls: ['./transaction-invoice.component.scss']
})
export class TransactionInvoiceComponent implements OnInit {

  @Input() transactions: Array<{
    clientCode?: string,
    requestCode?: string,
    date?: string,
    value?: string[],
    platformSell?: string;
  }>;

  requestCode: string;
  value: string;
  productImagem: any;
  productAmount: string;
  productCode: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content: any, data: any) {
    this.requestCode = data.requestCode;
    this.value  = data.value;
    this.productImagem = 'assets/images/product/img-7.png';
    this.productAmount = '1';
    this.modalService.open(content , { centered: true });
    this.productCode = '0001';
  }
}
