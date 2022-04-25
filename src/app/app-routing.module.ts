import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [{path:"welcome", component:WelcomePageComponent}, 
{path:"product-list", component:ProductListComponent}, 
{path:"addNewProduct", component:AddNewProductComponent}, 
{path:"product-description/:id", component:ProductDescriptionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomePageComponent, ProductListComponent, AddNewProductComponent, ProductDescriptionComponent]