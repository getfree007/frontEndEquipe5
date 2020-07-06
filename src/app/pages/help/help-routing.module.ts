import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRoutingModule {}
