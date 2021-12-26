import { environment } from '../../environments/environment'

const env = {
    // API_URL : 'http://dev.walletcampaigns.com/api',
    // API_URL : 'http://35.176.217.108:8080/api'
    API_URL : 'http://localhost:8080/api',
}

// if(process.env.REACT_APP_ENV === Environment.DEVELOPMENT){
// }

if(environment.staging){
    env.API_URL = 'https://dev.walletcampaigns.com/api'
}

// if(process.env.REACT_APP_ENV === Environment.PRODUCTION){

// }

export default env