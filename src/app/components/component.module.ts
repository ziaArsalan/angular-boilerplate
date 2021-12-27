import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonPrimary } from './button-primary/button-primary.component';
import { GeneralForm } from './general-form/general-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      ButtonPrimary,
      GeneralForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
      ButtonPrimary,
      GeneralForm
  ]
})
export class ComponentModule { }
