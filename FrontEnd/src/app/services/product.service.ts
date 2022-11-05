import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseURL='http://localhost:3000'; 

  constructor(private http:HttpClient) { }

  postProduct(product:Product){
    return this.http.post(this.baseURL+"/AddProduct",product);
  }

  getProductList(){
    return this.http.get(this.baseURL+"/AddProduct");
  }

  PutProduct(product:Product){
    return this.http.put(this.baseURL+`/${product._id}`,product);
  }

  DeleteProduct(id:any){
    return this.http.delete(this.baseURL+`/${id}`);
  }

  getProductById(id:any){
    return this.http.get(this.baseURL+"/"+id);
  }
}
