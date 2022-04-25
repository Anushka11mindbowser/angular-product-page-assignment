import { Component } from '@angular/core';
import {ProductsService} from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-page-assignment';
  productData:any = [];
  constructor(private product:ProductsService){
    this.product.getData().subscribe(data=>{
    console.warn(data);
    this.productData = data;
    })
  }


  getProductFormData(data:any){
    console.warn(data);
    this.product.sendProduct(data).subscribe((result) =>{
      console.warn(result)
    })

  }
 



}
