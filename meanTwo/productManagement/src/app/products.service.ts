import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Product } from "./product";

@Injectable()
export class ProductsService {
  observedProducts = new BehaviorSubject(null);

  updateProducts(products: Product[]) {
    this.observedProducts.next(products);
  }

  constructor() { }

}
