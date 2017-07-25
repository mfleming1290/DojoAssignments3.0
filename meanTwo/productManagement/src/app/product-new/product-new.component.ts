import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct = new Product();
  products: Product[];


  constructor(private _produceService: ProductsService, private _router: Router) {
    this._produceService.observedProducts.subscribe( (products) => {
      this.products = products;
    })
  }

  ngOnInit() {
    
  }

  onSubmit(form) {
    console.log(this.newProduct);
    this.products.push(this.newProduct);
    this._produceService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/product']);

  }

}
