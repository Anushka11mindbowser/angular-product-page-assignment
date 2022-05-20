import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  productData:any = []
  
  constructor(private router:Router, private product:ProductsService) { 
    this.product.getData().subscribe(data=>{
      console.warn(data);
      this.productData = data;
    })

    
    


  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigateByUrl('/addNewProduct')
  }
  goBack(){
    this.router.navigateByUrl('/welcome')
  }

  displayProd(item:any){
    this.router.navigateByUrl("/product-description/" + item.id )

  }

  

}
