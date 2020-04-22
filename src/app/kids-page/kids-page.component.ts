import { Component, OnInit } from '@angular/core';
import { KID_PRODUCTS } from './kids-products';

@Component({
  selector: 'app-kids-page',
  templateUrl: './kids-page.component.html',
  styleUrls: ['../stylesheets/product-page-components.css']
})
export class KidsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kidProducts = KID_PRODUCTS;
  h1Text = "Kids' Coats";
  h2Text = "Our Signature Collection";

}
