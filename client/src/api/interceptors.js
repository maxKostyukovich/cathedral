import axios from 'axios'
import { STORAGE_KEYS } from "../constants";
import history from '../history'
import {refreshTokens} from "./restApi";

axios.interceptors.request.use( config => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
    if(config.headers.Authorization !== accessToken){
        config.headers.Authorization = accessToken;
    }
    return config
}, err => {
    return Promise.reject(err)
    }
);

axios.interceptors.response.use( response => {
    return response
},async err => {
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE);
    const {config, response: {status, data}} = err;
    if(status === 401) {
        if (!refreshToken) {
            return Promise.reject(err);
        }
        if (['Token expired'].includes(data)) {
            if (refreshToken) {
                const res = await refreshTokens(refreshToken);
                if (res.status === 200) {
                    return axios(config);
                }
            }
        }
        if ('Invalid token' === data) {
            removeTokens();
        }
        if ("Refresh token expired" === data) {
            removeTokens();
            history.push('/login');
        }
    }
    return Promise.reject(err);
});

function removeTokens(){
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE);
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
}

export default axios;