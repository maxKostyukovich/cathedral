import axios from 'axios'
import { STORAGE_KEYS } from "../constants";

axios.interceptors.request.use( config => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE)
    if(config.headers.Authorization !== accessToken){
        config.headers.Authorization = accessToken;
    }
    return config
}, error => {
    return Promise.reject(err)
    }
)

axios.interceptors.response.use( response => {
    return response
}, error => {
    
})