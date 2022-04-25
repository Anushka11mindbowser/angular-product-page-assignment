import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductListComponent } from './product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDescriptionComponent,
    AddNewProductComponent,
    WelcomePageComponent,
    ProductListComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   ReactiveFormsModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
