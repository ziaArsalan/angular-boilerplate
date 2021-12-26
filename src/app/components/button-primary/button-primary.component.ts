import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector    : 'button-primary',
    templateUrl : './button-primary.component.html',
    styleUrls   : ['./button-primary.component.scss']
})


export class ButtonPrimary implements OnInit {

    @Input() innerText   : string = 'Button Primary'
    @Input() class?      : string
    @Input() disabled?   : boolean
    @Input() processing? : boolean = false
    @Input() type?       : string
    @Input() click?      : any

    constructor(){}

    ngOnInit(){}

    handleClick(){
        this.click && this.click()
    }

}