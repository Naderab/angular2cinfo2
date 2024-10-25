import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private cs: CategoryService,private r:Router) { }
  
  //Create input
  // name : Nom d'input
  name: FormControl = new FormControl();

  //Create form
  category: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    available: new FormControl(),
    image: new FormControl(),
    /*adresse: new FormGroup({
      Street: new FormControl(),
      city: new FormControl()
    })*/
  })

  submit() {
    this.cs.addCategory(this.category.value)
    this.r.navigate(['/home']);
  }
}
