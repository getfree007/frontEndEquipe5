import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { InvoiceComponent } from './invoice/invoice.component';





const routes: Routes = [
    {
        path: 'my-orders',
        component: MyOrdersComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRequestsRoutingModule {}
