
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {



  constructor(private product:ProductsService,private router : ActivatedRoute) { }
  fetchedProductsData: any;
  pid:any;
  productId : any;
  name:any;
  category:any;
  price:any;
  serialnumber:any;
  releasedate:any
  stockunit:any;
  description:any;
  ngOnInit(): void {
    this.pid=this.router.snapshot.params['id'];
    // console.log(this.pid)
    this.getSingleProduct();

  }
  getSingleProduct(){
    this.product.getProductData().subscribe((data:any)=>{
      console.log(data[this.pid], "hello")
      this.productId = data[this.pid]['id'];
      this.name = data[this.pid]['productName'];
      this.category = data[this.pid]['productCategory'];
      this.price = data[this.pid]['price'];
      this.serialnumber = data[this.pid]['serialNumber'];
      this.releasedate = data[this.pid]['releaseDate'];
      this.stockunit = data[this.pid]['stockUnit'];
      this.description = data[this.pid]['description'];
    })
  }

}
