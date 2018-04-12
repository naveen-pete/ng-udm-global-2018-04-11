import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  product: Product;
  addNew: boolean;
  @ViewChild('f') productForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService
  ) {
    this.product = new Product();
    this.addNew = true;
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => {
        if (!params.get('id') || params.get('id') === 'new') {
          return Observable.empty();
        }

        this.id = +params.get('id');
        return this.service.getProduct(this.id);
      })
      .subscribe(
        (product: Product) => {
          console.log(`Success: Get product successful. (id: ${this.id})`);
          this.product = product;
        },
        error => {
          console.log(`Error: Get product failed! (id: ${this.id})`, error);
        }
      );

    // this.route.params.subscribe(params => {
    //   if (params['id'] !== 'new') {
    //     this.id = +params.id;
    //     const p = this.service.getProduct(this.id);

    //     if (p) {
    //       Object.assign(this.product, p);
    //       this.addNew = false;
    //     }
    //   }
    // });
  }

  onSubmit() {
    this.product.name = this.productForm.value.name;
    this.product.description = this.productForm.value.description;
    this.product.price = +this.productForm.value.price;
    this.product.isAvailable = this.productForm.value.isAvailable
      ? this.productForm.value.isAvailable
      : false;

    if (this.addNew) {
      this.service.addProduct(this.product);
    } else {
      this.service.updateProduct(this.id, this.product);
    }
    this.router.navigate(['/products']);
  }
}
