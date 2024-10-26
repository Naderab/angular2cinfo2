import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  categories: Category[] = [];
  listcategoryfiltred: Category[] = [];
  //Injection des dépendances
  constructor(private cs: CategoryService,
    private api: ApiService) {
   // this.categories = this.cs.getCategories();
   // this.listcategoryfiltred = this.categories;
    this.api.get<Category[]>('category').subscribe({
      next: (data) => {
        this.categories = data
        this.listcategoryfiltred = this.categories
      }
    })
  }

  deleteCategory(id: number) {
    this.api.delete<Category>('category', id).subscribe({
      next: () =>
        this.listcategoryfiltred =
        this.listcategoryfiltred.filter(c => c.id != id)
    });
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
