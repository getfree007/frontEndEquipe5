import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyRequestsRoutingModule } from './my-requests-routing.module';
import {FormsModule} from "@angular/forms";
import {WidgetModule} from "../../shared/widget/widget.module";
import { NgbProgressbarModule, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from 'ng2-charts';
import { UIModule } from 'src/app/shared/ui/ui.module';




@NgModule({
  declarations: [MyOrdersComponent, InvoiceComponent],
  imports: [
    CommonModule,
    MyRequestsRoutingModule,
    FormsModule,
    WidgetModule,
    NgbProgressbarModule,
    NgxEchartsModule,
    ChartsModule,
    UIModule


  ]
})
export class MyRequestsModule { }
