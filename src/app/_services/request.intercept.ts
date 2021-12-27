import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()

export class HandleErrorsInterceptor implements HttpInterceptor {
    
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return new Observable((observer)=>{
            next.handle(req).subscribe((res: any)=>{
                if(res instanceof HttpResponse){
                    // continueing the HTTP cycle
                    observer.next(res)
                }
            }, (err:any)=>{
                // Handling Errors
                console.log(err)
            })
        })
    }

}