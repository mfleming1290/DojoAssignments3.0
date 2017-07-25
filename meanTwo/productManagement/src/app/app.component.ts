import { Component } from '@angular/core';
import { Product } from "./product";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myProducts = [
    new Product(1, 'Camera', 1499.99, 'https://pisces.bbystatic.com/BestBuy_US/images/products/1634/1634012le.jpg;maxHeight=460;maxWidth=460'),
    new Product(2, 'Laptop', 1299.99, 'https://pisces.bbystatic.com/BestBuy_US/images/products/5190/5190001_sa.jpg;maxHeight=460;maxWidth=460')
  ];

  constructor(private _productService: ProductsService) {
    this._productService.updateProducts(this.myProducts)
    this._productService.observedProducts.subscribe(
      (products) => { this.myProducts = products }
    )
  }

  updateProducts() {
    this._productService.updateProducts(this.myProducts)
  }
  
}
