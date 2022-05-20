import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AddNewProductComponent } from './features/component/add-new-product/add-new-product.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/component/login/login.component';
import { UnauthorizedComponent } from './auth/component/unauthorized/unauthorized.component';
import { WildcardComponent } from './auth/component/wildcard/wildcard.component';
import { DemoComponent } from './demo/demo.component';
import { ProductDescriptionComponent } from './features/component/product-description/product-description.component';
import { ProductListComponent } from './features/component/product-list/product-list.component';
import { WelcomePageComponent } from './auth/component/welcome-page/welcome-page.component';

import { FeatureComponent } from './feature/feature/feature.component';

const routes: Routes = [
  {path:"features", component:FeatureComponent, children:[{ path: "product-list", component: ProductListComponent },
  { path: "addNewProduct", component: AddNewProductComponent },
  { path: "product-description/:id", component: ProductDescriptionComponent },]},{ path: "login", component: LoginComponent }, {
  path: "auth", component: AuthComponent, children: [{path:"welcome", component:WelcomePageComponent},
    { path: "login", component: LoginComponent },
    {path:"wildcard", component:WildcardComponent},
    {
      path:"unauth", component:UnauthorizedComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ProductListComponent, AddNewProductComponent, ProductDescriptionComponent, DemoComponent]