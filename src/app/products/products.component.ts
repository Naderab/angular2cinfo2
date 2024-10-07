import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  id!: number;
  listProducts: Product[] = [
    {
      id: 1,
      name: 'iphone',
      price: 2000,
      image: 'assets/images/product1.png',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'tv',
      price: 3000,
      image: 'assets/images/product2.png',
      categoryId: 2,
    },
  ];


  //Injection des dépendences
  constructor(private activated: ActivatedRoute) {
    this.id = this.activated.snapshot.params['id'];
    this.listProducts = this.listProducts.filter
      (p => p.categoryId == this.id)
    console.log(this.activated.snapshot.params['id']);
  }
}
