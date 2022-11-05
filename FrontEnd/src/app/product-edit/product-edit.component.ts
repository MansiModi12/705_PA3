import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  Product = new Product();
  ProductArray: Product[] = [];
  constructor(private route:ActivatedRoute,private service:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.Product._id=params['id'];
      if(this.Product._id!=undefined){
        this.GetById(this.Product._id);
      }
    });
  }

  GetById(id:any){
    this.service.getProductById(id).subscribe((resp:any)=>{
      this.Product=resp;
    });
  }

  OnSubmit() {
    this.service.PutProduct(this.Product).subscribe((resp: any) => {
      console.log(resp);
      
    this.router.navigateByUrl("/list");
    });
    // if (this.Product._id == "") {
    //   this.service.postProduct(this.Product).subscribe((resp: any) => {
    //     console.log(resp);
    //   })
    // } else {
  
    // }
  }
}
