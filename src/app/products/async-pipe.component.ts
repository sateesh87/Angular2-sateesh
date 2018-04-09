import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./product-list.component.css']
})
export class AsyncPipeComponent implements OnInit {
  pageTitle: string = ' Async Pipe with Observables Example';
  pageTitletwo: string = ' Async Pipe with Promises Example';
  details: string = 'have to learn this';
  summary: string = `hey..!!!!! here we have read the values successfully by using async pipe.`;
  products: Observable<IProduct[]>; // creating observable type property.

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    // it will return observable value and the same we are capturing it and passing it to Template.
    this.products = this._productService.getProducts();
  }

}
