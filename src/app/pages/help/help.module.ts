import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpRoutingModule } from './help-routing.module';
import { PagesModule } from '../pages.module';
import { UIModule } from 'src/app/shared/ui/ui.module';


import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [FaqComponent,ContactUsComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    PagesModule,
    UIModule,
    NgbNavModule,



  ]
})
export class HelpModule { }
