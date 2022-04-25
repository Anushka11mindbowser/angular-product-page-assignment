import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsyncValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  url = 'http://localhost:3000/products';
  
  prodForm:any;
  validPattern = "^[a-zA-Z0-9]$"; 
  constructor(private http:HttpClient, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.prodForm = new FormGroup({
      "id":new FormControl(null,[Validators.required]),
      "productName":new FormControl(null, [Validators.required, Validators.pattern(this.validPattern)]),
      "productCategory":new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      "price":new FormControl(null, [Validators.required]),
      "serialNumber":new FormControl(null, [Validators.required]),
      "stockUnit":new FormControl(null, [Validators.required]),
      "releaseDate":new FormControl(null, [Validators.required]), 
      "description":new FormControl(null, [Validators.required, Validators.maxLength(30)])
  
  })
    

    
  }

  getProductsFormData(data:any){
    this.http.post("http://localhost:3000/products",data).subscribe((result)=>{
      console.warn(result)
    })
    console.warn(data)
  }

  goBack(){
    this.router.navigateByUrl("/product-list")
  }

  get id(){
    return this.prodForm.get('id');
  }

  get productName(){
    return this.prodForm.get('productName');
  }

  get productCategory(){
    return this.prodForm.get('productCategory');
  }

  get price(){
    return this.prodForm.get('price');
  }

  get serialNumber(){
    return this.prodForm.get('serialNumber')
  }

  get stockUnit(){
    return this.prodForm.get('stockUnit');
  }

  get releaseDate(){
    return this.prodForm.get('releaseDate')
  }

  get description(){
    return this.prodForm.get('description')
  }





 

}
