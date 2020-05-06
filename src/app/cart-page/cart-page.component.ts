import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../add-cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  constructor(private addCartService: AddCartService) { }
  cartContents: Array<Product> = this.addCartService.cart;

  ngOnInit() {}

}
