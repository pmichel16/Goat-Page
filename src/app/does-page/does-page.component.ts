import { Component, OnInit } from '@angular/core';
import { DOE_PRODUCTS } from './does-products';

@Component({
  selector: 'app-does-page',
  templateUrl: './does-page.component.html',
  styleUrls: ['../stylesheets/product-page-components.css']
})
export class DoesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doeProducts = DOE_PRODUCTS;
}
