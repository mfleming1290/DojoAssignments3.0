import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: Product[];
  product = new Product();


  constructor(private _route: ActivatedRoute,private _productsService: ProductsService,private _router: Router) {
      _productsService.observedProducts.subscribe(
      (products) =>  {this.products = products;
      },
      (err) => {console.log(err);});

      _route.params.subscribe(param => {
        for (var idx = 0; idx < this.products.length; idx++) {               
          console.log('in for loop');               
          if (this.products[idx].id == param.id) {            
            this.product = this.products[idx]
            break;

          }    
        }
      })    
      
  }

  test() {
    console.log(this.product);
    console.log(this.products);
    
    
  }



  onSubmit(form) {
    console.log('this' ,this.product);
    console.log(this.products, 'products' );
    
    

    this._productsService.updateProducts(this.products);
    this._router.navigate(['/product']);

  }


  ngOnInit() {
  }

}
