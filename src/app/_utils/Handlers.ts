import { enums } from '../_enums'
import { ServiceResponse } from '../_interface'
// import { utils } from '../_utils'

interface ServiceHandler {
    toaster? : boolean,
    message? : string,
    error?   : string,
    method   : string,
    path     : string,
    query?   : string,
    payload? : object,
    token?   : boolean
}

const Services = (fn:any) => {
    return async ({toaster, message, error, ...props} : ServiceHandler): Promise<ServiceResponse> => {
        try {
            const res = await fn(props)
            console.log('API - RESPONSE', res)
            // toaster && utils.showToaster({title: 'Success', message: message || res.data.message, severity: 'success'})
            return { response : res.data}
        } catch (err:any) {
            console.log('API- ERROR', err.response ? err.response.data : err)

            // expire error : jwt expired
            if(err.response && err.response.status === enums.ResponseStatus.UNAUTHORIZED) {
                // utils.showToaster({position: 'top-right', title: 'Error', message: error || 'session expired', severity: 'error'})
                // setTimeout(utils.Logout, enums.TOASTER_DELAY)
                return { error: err.response ? err.response.data : err}
            }

            // toaster && utils.showToaster({title: 'Error', message: error || err.response ? err.response.data.message : err.message, severity: 'error'})
            return { error: err.response ? err.response.data : err}
        }
    }
}

export {
    Services
}