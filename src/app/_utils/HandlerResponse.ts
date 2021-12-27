import { Injectable } from '@angular/core'
import { enums } from '../_enums'
import { ServiceResponse } from '../_interface'
import { ToastrService } from 'ngx-toastr';
import { utils } from '../_utils'

interface ServiceHandler {
    toaster? : boolean,
    message? : string,
    error?   : string,
    method   : 'get' | 'post' | 'put' | 'delete' | 'all',
    path     : string,
    query?   : string,
    payload? : object,
    token?   : boolean
}

@Injectable({providedIn: 'root'})

export class HandleResponse {
    
    constructor(private toaster: ToastrService){}

    Services = (fn:any) => {
        return async ({toaster, message, error, ...props} : ServiceHandler): Promise<ServiceResponse> => {
            try {
                const res = await fn(props)
                console.log('API - RESPONSE', res)
                toaster && this.toaster.success(message || res.data.message, 'Success', {timeOut: enums.TOASTER_DELAY})
                return { response : res.data}
            } catch (err:any) {
                console.log('API- ERROR', err.response ? err.response.data : err)
    
                // expire error : jwt expired
                if(err.response && err.response.status === enums.ResponseStatus.UNAUTHORIZED) {
                    toaster && this.toaster.error(error || 'session expired', 'Error', {timeOut: enums.TOASTER_DELAY})
                    setTimeout(utils.Logout, enums.TOASTER_DELAY)
                    return { error: err.response ? err.response.data : err}
                }
    
                toaster && this.toaster.error(error || err.response ? err.response.data.message : err.message, 'Error', {timeOut: enums.TOASTER_DELAY})
                return { error: err.response ? err.response.data : err}
            }
        }
    }
}

