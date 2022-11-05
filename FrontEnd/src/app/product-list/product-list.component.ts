import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product = new Product();
  ProductArray: Product[] = [];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.fetchProductList();
  }

  
  fetchProductList() {
    this.service.getProductList().subscribe((resp: any) => {
      this.ProductArray = resp;
    })
  }

  OnEdit(proo: Product) {
    this.Product = proo;
  }

  OnDelete(id:any){
    this.service.DeleteProduct(id).subscribe((resp:any)=>{
      console.log(resp);
      javascript: window.location.reload();
    })
  }

}
