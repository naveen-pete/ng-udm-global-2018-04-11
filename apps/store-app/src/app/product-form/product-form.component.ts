import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage = false;
  @Output() productCreated = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  onSave() {
    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
