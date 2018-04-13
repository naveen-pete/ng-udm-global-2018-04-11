import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log('Products succesfully retrieved');
      },
      error => {
        console.log('Error while getting products:', error);
        this.router.navigate(['/not-found']);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log('Product successfully deleted.');
          this.products = this.products.filter(
            product => product.id !== productId
          );
        },
        error => {
          console.log('Error while deleting product.');
        }
      );
    }
  }
}
