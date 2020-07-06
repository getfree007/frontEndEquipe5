import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-cashflow2',
  templateUrl: './table-cashflow2.component.html',
  styleUrls: ['./table-cashflow2.component.scss']
})
export class TableCashflow2Component implements OnInit {

  @Input() cashflow2: Array<{
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
