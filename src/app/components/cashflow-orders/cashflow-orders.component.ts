import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cashflow-orders',
  templateUrl: './cashflow-orders.component.html',
  styleUrls: ['./cashflow-orders.component.scss']
})
export class CashflowOrdersComponent implements OnInit {

  
  @Input() cashfloworders: Array<{
    id?: string;
    index?: number,
    date?: string,
    total?: string,
    quantity?:string
  }>;
  constructor(private modalService: NgbModal) {
    
   }

  ngOnInit(): void {
 

  }
     /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
