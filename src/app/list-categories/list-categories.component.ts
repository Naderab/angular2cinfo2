import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  categories: Category[] = [];
  listcategoryfiltred: Category[] = [];
  //Injection des dépendances
  constructor(private cs: CategoryService) {
    this.categories = this.cs.getCategories();
    this.listcategoryfiltred = this.categories;
    
  }

  //TWO-WAY Databinding
  searchText: string = '';

  title: string = 'Liste des catégories';
  category: Category = {
    id: 1,
    name: 'phone',
    available: true,
    image: '',
  };

  afficher(name: string) {
    alert(name);
  }

  onChangeInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  searchCategorie() {
    this.listcategoryfiltred = [];
    this.categories.forEach((element) => {
      if (element.name.includes(this.searchText)) {
        this.listcategoryfiltred.push(element);
      }
    });
  }
}
