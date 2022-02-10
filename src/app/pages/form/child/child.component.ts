import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{
    
    @Input() label?    : string
    @Input() formGroup : any
    @Input() control   : any
    @Input() error     : any

    constructor( ) {}


}