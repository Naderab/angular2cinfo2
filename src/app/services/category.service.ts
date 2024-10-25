import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'phone',
      available: true,
      image: 'assets/images/categorie_electromenager.jpg',
    },
    {
      id: 2,
      name: 'PC',
      available: true,
      image: 'assets/images/categorie_produits_informatiques.jpg',
    },
    {
      id: 3,
      name: 'Clavier',
      available: false,
      image: 'assets/images/categorie_smartPhone.jpg',
    },
  ];
  constructor() { }
  
  getCategories() {
    return this.categories;
  }

  addCategory(category:Category) {
    this.categories.push(category);
  }
}
