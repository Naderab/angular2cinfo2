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
      image: 'assets/images/product1.jpg',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'tv LG',
      price: 3000,
      image: 'assets/images/product2.jpeg',
      categoryId: 1,
    },
    {
      id: 3,
      name: 'tv samsung',
      price: 2000,
      image: 'assets/images/product3.jpeg',
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Pc Dell',
      price: 4800,
      image: 'assets/images/product4.jpeg',
      categoryId: 1,
    },
  ];

  //Injection des dépendences
  constructor(private activated: ActivatedRoute) {
    this.id = this.activated.snapshot.params['id'];
    this.listProducts = this.listProducts.filter(
      (p) => p.categoryId == this.id
    );

    console.log(this.activated.snapshot.params['id']);
  }
}
