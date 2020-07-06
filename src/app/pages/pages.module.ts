import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbProgressbar, NgbProgressbarModule, NgbAlertModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsModule } from './dashboards/dashboards.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './help/contact-us/contact-us.component';
import { IntegrationComponent } from './integration/integration.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [ ProfileComponent,IntegrationComponent],
    imports: [
        CommonModule,
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

 
    ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
