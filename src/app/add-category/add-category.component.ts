import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  id !: number;
  constructor(private r: Router,
    private api: ApiService,
    private ar:ActivatedRoute
  ) { 
    this.id = this.ar.snapshot.params['id'];
    if (this.id != undefined) {
      this.api.getBy<Category>('category', this.id).subscribe({
        next: data => this.category.patchValue({
          name: data.name,
          available: data.available,
          image:data.image
        })
      })
    }
  }
  
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
   // this.cs.addCategory(this.category.value)
    // this.r.navigate(['/home']);
    if (this.id != undefined) {
      this.api
        .update<Category>('category', this.id, this.category.value)
        .subscribe({
          next: () => this.r.navigate(['/home']),
          error: (e) => alert(e),
        });
    } else {
      this.api.add<Category>('category', this.category.value).subscribe({
      next: () => this.r.navigate(['/home']),
      error: (e) => alert(e),
    });
    }
    
  }

  getButtonMessage() {
   return this.id != undefined ? "Update Category" : "Add Category"
  }
}
