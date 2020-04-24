import { Component, OnInit } from '@angular/core';
import { KID_PRODUCTS } from './kids-products';
import { HeadersService } from '../headers.service';

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

}
