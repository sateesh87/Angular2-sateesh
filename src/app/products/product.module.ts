import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpace } from '../shared/convertTo-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { AsyncPipeComponent } from './async-pipe.component';



@NgModule({
  imports: [
    RouterModule.forChild([
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent},
        {path: 'asyncPipe', component: AsyncPipeComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent, ConvertToSpace, ProductDetailComponent, AsyncPipeComponent
  ],
  providers: [ProductService, ProductGuardService]
})
export class ProductModule { } // treat this module as a features module.
