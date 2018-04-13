import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = new Product();
  showMessage = false;

  constructor(
    private logger: LoggerService,
    private productsService: ProductsService
  ) {}

  onSave() {
    this.productsService.addProduct(this.product);

    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);

    // const logger = new FakeLoggerService();
    this.logger.log('Save button clicked in Product Form.');
  }
}
