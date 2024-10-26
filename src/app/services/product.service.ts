import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3000/product');
  }
  addProduct(product: Product) {
    return this.http.post('http://localhost:3000/product', product);
  }
  updateProduct(product: Product) {
    return this.http.put(
      'http://localhost:3000/product/' + product.id,
      product
    );
  }
  removeProduct(id:number) {
     return this.http.delete(
       'http://localhost:3000/product/' +id
     );
  }
}
