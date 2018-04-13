import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        auth: 'my-auth-token',
        xyz: '123'
      })
    };
    return this.httpClient.get<Product[]>(this.apiUrl, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
