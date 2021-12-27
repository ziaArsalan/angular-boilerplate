import axios from 'axios'
import env from '../_config'

// import { Handlers } from '../_utils'


const BASE_URL_V1 = env.API_URL + '/v1'

const APIs = {
    auth : {
        login  : BASE_URL_V1 + '/auth/login',
        signup : BASE_URL_V1 + '/auth/signup',
    }
}

const getTokenHeader = async () => {
    let user:any = localStorage.getItem('user')
    if(!user) return {}
    user = JSON.parse(user)
    return { 'x-auth-token': 'Bearer ' + user.token }
}

interface service {
    method   : string,
    path     : string,
    query?   : string,
    payload? : object,
    token?   : boolean
}

const CallService = async ({method, path, query, payload, token=true} : service) => {
    const pathname = query ? path + '?'+ query : path

    const config = token ? {headers: await getTokenHeader()} : {}

    const details:any = {}

    if(payload) details.payload = payload
    details.config = config

    return await (axios as any)[method](pathname, ...Object.values(details))
}


export const MainService = {
    APIs,
    CallService : CallService,
    // CallService : Handlers.Services(CallService),
    getTokenHeader
}

