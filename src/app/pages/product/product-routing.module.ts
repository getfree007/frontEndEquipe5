import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProductsComponent } from './my-products/my-products.component';
import { MyStockComponent } from './my-stock/my-stock.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    {
        path: 'my-products',
        component: MyProductsComponent
    },
    {
        path: 'my-stock',
        component: MyStockComponent
    },
    {
      path: 'advertising',
      component: AdvertisingComponent
    },
    {
        path: 'add-product',
        component: AddProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
