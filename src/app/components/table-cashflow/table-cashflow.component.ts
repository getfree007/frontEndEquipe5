import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-cashflow',
  templateUrl: './table-cashflow.component.html',
  styleUrls: ['./table-cashflow.component.scss']
})
export class TableCashflowComponent implements OnInit {

  
  @Input() cashflow: Array<{
    id?: string;
    index?: number,
    marketplace?: string,
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
