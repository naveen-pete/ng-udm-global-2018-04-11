import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private logger: LoggerService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
