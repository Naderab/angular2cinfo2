import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.pattern("[A-Z][A-Za-z0-9_éàè]*")]),
    price: new FormControl("",Validators.min(0)),
    image: new FormControl("",[Validators.required])
  })
}
