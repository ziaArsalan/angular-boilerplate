import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

    form = this.fb.group({
        name : ['', Validators.required],
        age  : ['', Validators.required]
    })

    constructor(
        private fb : FormBuilder
    ) {}

    Submit(){
        console.log(this.form.value);
        
    }

}