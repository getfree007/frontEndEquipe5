import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';
import { MyProductsComponent } from './product/my-products/my-products.component';

import { ProfileComponent } from './profile/profile.component';
import { IntegrationComponent } from './integration/integration.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'products', component: MyProductsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'integra', component: IntegrationComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
  { path: 'cash', loadChildren: () => import('./cash-flow/cash-flow.module').then(m => m.CashFlowModule) },
  { path: 'my-requests', loadChildren: () => import('./my-requests/my-requests.module').then(m => m.MyRequestsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
