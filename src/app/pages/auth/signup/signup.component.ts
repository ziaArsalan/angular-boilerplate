import { Component, OnInit } from '@angular/core'
import { MainService } from 'src/app/_services'
import { login } from 'src/app/_validators'

@Component({
    selector    : 'signup',
    templateUrl : './signup.component.html',
    styleUrls   : ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

    processing  = false
    loginSchema = login

    constructor(private mainService: MainService){}

    ngOnInit(){}

    async handleSubmit(form:any){
        this.processing = true
        await this.mainService.CallService({
            toaster : true,
            method  : 'post',
            path    : 'login',
            payload : form.value
        })
        this.processing = false
    }

}