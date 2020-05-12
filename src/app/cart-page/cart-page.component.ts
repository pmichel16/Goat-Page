import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../add-cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartContents: Array<Product>;
  constructor(private addCartService: AddCartService) { };

  ngOnInit() {
    this.cartContents = this.addCartService.getCart();
  }

}
