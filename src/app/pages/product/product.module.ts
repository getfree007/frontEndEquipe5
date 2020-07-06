import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProductsComponent } from './my-products/my-products.component';
import { MyStockComponent } from './my-stock/my-stock.component';
import { AdvertisingComponent } from "./advertising/advertising.component";
import { AddProductComponent } from "./add-product/add-product.component";
import {UIModule} from "../../shared/ui/ui.module";
import {WidgetModule} from "../../shared/widget/widget.module";
import {NgApexchartsModule} from "ng-apexcharts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductRoutingModule } from "./product-routing.module";
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
import {DropzoneModule} from "ngx-dropzone-wrapper";



@NgModule({
  declarations: [MyProductsComponent, MyStockComponent, AdvertisingComponent, AddProductComponent],
  imports: [
    CommonModule,
    UIModule,
    WidgetModule,
    NgApexchartsModule,
    FormsModule,
    ProductRoutingModule,
    NgbProgressbarModule,
    ReactiveFormsModule,
    DropzoneModule,
  ]
})
export class ProductModule { }
