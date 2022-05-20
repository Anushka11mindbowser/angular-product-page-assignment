import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';



import { DemoComponent } from './demo/demo.component';
import { AuthModule } from './auth/auth.module';
import { FeaturesModule } from './features/features.module';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   
    DemoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,ReactiveFormsModule,
   AuthModule, FeaturesModule

   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
