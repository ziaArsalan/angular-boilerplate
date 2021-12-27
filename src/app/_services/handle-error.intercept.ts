import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class HandleErrorService{
    constructor(){}
    public handleError(err: HttpErrorResponse){
        let errorMessage: string
        if(err.error instanceof ErrorEvent){
            // A client side network error
            errorMessage = `Client side network error: ${err.error.message}`
        } else {
            // Backend Error
            errorMessage = 'something went wrong'
        }
        console.log(errorMessage);
        
    }
}