import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  //Create input
  name: FormControl = new FormControl();

  //Create form

  category: FormGroup = new FormGroup({
    name: new FormControl("name"),
    available: new FormControl(),
    image : new FormControl()
  })

}