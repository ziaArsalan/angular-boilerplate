import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector    : 'signup',
    templateUrl : './signup.component.html',
    styleUrls   : ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

    @Input() name?           : string
    @Input() formControlName : string | null = null
    @Input() class?          : string
    @Input() readonly?       : boolean
    @Input() change?         : any
    @Input() type?           : string

    constructor(){}

    ngOnInit(){}

    handleChange(){
        this.change && this.change()
    }

}