import { Injectable } from '@angular/core'
import axios from 'axios'
import env from '../_config'

import { HandleResponse } from '../_utils'

const BASE_URL_V1 = env.API_URL + '/v1'
    
const APIs = {
    auth : {
        login  : BASE_URL_V1 + '/auth/login',
        signup : BASE_URL_V1 + '/auth/signup',
    }
}

interface service {
    method   : string,
    path     : string,
    query?   : string,
    payload? : object,
    token?   : boolean
}


@Injectable()

export class MainService {

    constructor(private handleResponse: HandleResponse){}

    getTokenHeader = async () => {
        let user:any = localStorage.getItem('user')
        if(!user) return {}
        user = JSON.parse(user)
        return { 'x-auth-token': 'Bearer ' + user.token }
    }

    getAPIs = () => APIs

    CallService = this.handleResponse.Services(async ({method, path, query, payload, token=true} : service) => {
        const pathname = query ? path + '?'+ query : path
    
        const config = token ? {headers: await this.getTokenHeader()} : {}
    
        const details:any = {}
    
        if(payload) details.payload = payload
        details.config = config
    
        return await (axios as any)[method](pathname, ...Object.values(details))
    })

}

