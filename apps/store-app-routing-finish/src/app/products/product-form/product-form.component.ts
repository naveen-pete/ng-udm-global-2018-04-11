import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  id: number;
  addNew = true;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.id = +map.get('id');
      if (this.id) {
        this.product = this.productsService.getProduct(this.id);
        this.addNew = false;
      }
    });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    if (this.addNew) {
      // call addProduct() on service
    } else {
      // call updateProduct() on service
    }
  }
}

// http://localhost:4200/products/1/edit?name=p1&price=10
