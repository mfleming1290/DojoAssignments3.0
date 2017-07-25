import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Product[] = []

  constructor(private _productsService: ProductsService ) { 

  }

 delete(product) {
   const idx = this.products.indexOf(product);
   this.products.splice(idx, 1);
  this._productsService.updateProducts(this.products);

 }

  ngOnInit() {
    this.subscription = this._productsService.observedProducts.subscribe(
      (products) =>  {this.products = products; },
      (err) => {console.log(err);},
      () => { }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
