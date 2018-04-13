import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 8',
      description: 'Product from Apple',
      price: 60000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Samsung Galaxy S8',
      description: 'Product from Samsung',
      price: 50000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Moto G',
      description: 'Product from Motorola',
      price: 30000,
      isAvailable: true
    }
  ];

  constructor(private logger: LoggerService) {}

  getProducts() {
    this.logger.log('ProductsService.getProducts() called.');
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.logger.log('ProductsService.addProduct() called.');
    this.products.unshift(newProduct);
  }
}
