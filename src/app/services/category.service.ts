import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:3000/category');
  }

  addCategory(category: Category) {
    return this.http.post('http://localhost:3000/category', category);
  }
  updateCategoy(category: Category) {
    return this.http.put(
      'http://localhost:3000/category/' + category.id,
      category
    );
  }
  removeCategory(id: number) {
    return this.http.delete('http://localhost:3000/category/' + id);
  }
}
