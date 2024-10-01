import { Component } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {

  //TWO-WAY Databinding
  searchText: string = '';

  title: string = 'Liste des catégories';
  category: Category = {
    id: 1,
    name: 'phone',
    available: true,
    image: '',
  };
  categories: Category[] = [
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

  afficher(name: string) {
    alert(name);
  }

  onChangeInput(event: Event) {
    console.log
      ((event.target as
        HTMLInputElement).value);
  }

  listcategoryfiltred:Category[]=this.categories
  searchCategorie() {
    this.listcategoryfiltred = []
    this.categories.forEach(element => {
      if (element.name.includes(this.searchText)) {
        this.listcategoryfiltred.push(element)
      }
    })
  }
}
