import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { MainService } from 'src/app/_services'

import { createValidatorFromSchema } from 'src/app/_validators'

// const inputElementType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

interface element {
    class?      : string,
    style?      : string,
    fieldClass? : string,
    fieldStyle? : string,
    category    : 'label' | 'input' | 'select',
    type?       : string,
    name        : string,
}

interface submitBtn {
    class?    : string,
    style?    : string,
    innerText : string,
}

interface generalformProps {
    class?       : string,
    style?       : string,
    fields       : object,
    schema?      : object,
    elements     : element[],
    submitBtn    : submitBtn
}

@Component({
    selector    : 'general-form',
    templateUrl : './general-form.component.html',
    styleUrls   : ['./general-form.component.scss']
})

export class GeneralForm implements OnInit {

    defaultProps = {
        class        : '',
        style        : '',
        fields       : {},
        schema       : {},
        elements     : [],
        submitBtn    : {class: '', style: '', innerText: ''}
    }

    @Input() props : generalformProps = this.defaultProps
    
    @Output() handleSubmit = new EventEmitter<object>()


    processing  = false
    generalForm = this.fb.group({})
    
    constructor(private fb: FormBuilder){ }
    
    ngOnInit(){
        this.generalForm = this.fb.group({...this.props.fields}, {validators: createValidatorFromSchema(this.props.schema)})
    }

    async Submit(){
        this.processing = true
        this.handleSubmit.emit(this.generalForm.value)
        this.processing = false
    }

}