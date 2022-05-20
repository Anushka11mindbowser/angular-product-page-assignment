import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../products.service';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule, routingComponents } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { WelcomePageComponent } from '../auth/component/welcome-page/welcome-page.component';
import { ListViewComponent } from './component/list-view/list-view.component';
import { AddNewProductComponent } from './component/add-new-product/add-new-product.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';
import { ProductListComponent } from './component/product-list/product-list.component';





@NgModule({
  declarations: [
    
    FeaturesComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class FeaturesModule { }
