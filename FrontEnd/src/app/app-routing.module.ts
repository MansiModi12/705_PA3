import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{
  path:"list",
  component:ProductListComponent
},
{
  path:"addProduct",
  component:ProductComponent
},
{
  path:"UpdateProduct/:id",
  component:ProductEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
