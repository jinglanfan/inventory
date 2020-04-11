import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { productDepartmentComponent } from './product-department.component';
import { productImageComponent } from './product-image.component';
import { productPriceComponent } from './product-price.component';
import { productRowComponent } from './product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    productDepartmentComponent,
    productImageComponent,
    productPriceComponent,
    productRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }