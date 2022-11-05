import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

//local imports
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Product = new Product();
  ProductArray: Product[] = [];
  constructor(private service: ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.Product._id=params['id'];
      if(this.Product._id!=undefined){
        this.GetById(this.Product._id);
      }
    });
  }

  OnSubmit() {
    this.service.postProduct(this.Product).subscribe((resp: any) => {
      console.log(resp);
      
    this.router.navigateByUrl("/list");
    })
    // if (this.Product._id == "") {
    //   this.service.postProduct(this.Product).subscribe((resp: any) => {
    //     console.log(resp);
    //   })
    // } else {
    //   this.service.PutProduct(this.Product).subscribe((resp: any) => {
    //     console.log(resp);
    //   });
    // }
  }

  GetById(id:any){
    this.service.getProductById(id).subscribe((resp:any)=>{
      this.Product=resp;
    })
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
