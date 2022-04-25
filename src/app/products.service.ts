import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = 'http://localhost:3000/products';
    return this.http.get(url);
}

sendProduct(data:any){
  let url = 'http://localhost:3000/products';
  return this.http.post(url,data)
}

getProductData(){
  return this.http.get<any>('http://localhost:3000/products');
}

getSingleProducts(id: any) {
  return this.http.get<any>('http://localhost:3000/products', id);
}

}
