import { Component, OnInit } from '@angular/core';
import { KID_PRODUCTS } from './kids-products';
import { Product } from '../product';
import { AddCartService } from '../add-cart.service';

@Component({
  selector: 'app-kids-page',
  templateUrl: './kids-page.component.html',
  styleUrls: ['../stylesheets/product-page-components.css']
})
export class KidsPageComponent implements OnInit {
  kidProducts = KID_PRODUCTS;
  constructor(private addCartService: AddCartService) { }

  /*Function to add an item to the cart when clicked*/
  addToCart(item: Product) {
    this.addCartService.addCart(item);
  }

  ngOnInit() {}
}
