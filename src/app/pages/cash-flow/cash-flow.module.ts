import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { NgbModalModule, NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from '../pages-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardsModule } from '../dashboards/dashboards.module';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { WidgetModule } from 'src/app/shared/widget/widget.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxEchartsModule } from 'ngx-echarts';
import { ComponentsModule } from 'src/app/components/components.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';



@NgModule({
  declarations: [InputComponent, OutputComponent],
  imports: [
    CommonModule,
    CashFlowRoutingModule,
  
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    UIModule,
    WidgetModule,
    NgbNavModule,
    NgbTooltipModule,
    PerfectScrollbarModule,
    NgbProgressbarModule,
    NgbModule,
    NgxEchartsModule,
    ComponentsModule,
    FormsModule,
    DropzoneModule,
  ]
})
export class CashFlowModule { }
