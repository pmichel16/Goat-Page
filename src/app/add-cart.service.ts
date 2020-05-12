import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  /*
   * I used this workaround found at https://github.com/angular/angular/issues/12889.
   * 
   * Each time that I navigated from one page of the router outlet to another, a new
   * instance of the AddCartService was created, and thus the contents of the cart were lost.
   * The code below is an attempt to prevent this issue. However, it did not work and I am logging
   * off for today.
   */
  static singletonInstance: AddCartService;
  constructor() {
    if (!AddCartService.singletonInstance) {
      AddCartService.singletonInstance = this;
    }
    return AddCartService.singletonInstance;
  }
  
  private cart = new Array<Product>();
  
  addCart(product: Product) {
    this.cart.push(product);
    alert("Product " + product.name + " added to cart!");
  }

  getCart(): Array<Product> {
    return this.cart;
  }
}
