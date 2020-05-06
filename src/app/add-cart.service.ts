import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  cart: Array<Product> = [];
  constructor() { }

  addCart(product: Product) {
    this.cart.push(product);
    alert("Product " + product.name + " added to cart!");
  }
}
