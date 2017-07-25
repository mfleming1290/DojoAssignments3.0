import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLandingComponent } from "./product-landing/product-landing.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNewComponent } from "./product-new/product-new.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";


const routes: Routes = [
    { path: '', component:  ProductLandingComponent, pathMatch: 'full' },
    { path: 'product', component:  ProductListComponent },
    { path: 'product/new', component:  ProductNewComponent},
    { path: 'product/edit/:id', component:  ProductEditComponent, pathMatch: 'full' }
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }