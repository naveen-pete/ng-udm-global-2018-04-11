import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAdd() {
    this.loggingService.logMessage('Product List - Add button clicked.');
    this.router.navigate(['/products/new']);
  }
}
