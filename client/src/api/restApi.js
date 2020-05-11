import axios from './interceptors'
import { BASE_URL, NEWS_URL, REFRESH_URL, LOGIN_URL, PRIEST_URL } from "./ConstantURLs";
import {setTokensToLocalStorage} from "../utils/localStorageUtil";

export const createNews = data => axios.post(`${BASE_URL}${NEWS_URL}`, data);
export const getAllNews = params => axios.get(`${BASE_URL}${NEWS_URL}`, {params});
export const getSingleNews = id => axios.get(`${BASE_URL}${NEWS_URL}/${id}`);
export const deleteNews = id => axios.delete(`${BASE_URL}${NEWS_URL}/${id}`);

export const login = data => axios.post(`${BASE_URL}${LOGIN_URL}`, data).then(setTokensToLocalStorage);
export const refreshTokens = refreshToken => axios.post(`${BASE_URL}${REFRESH_URL}`, {refreshToken}).then(setTokensToLocalStorage).catch(e => Promise.reject(e));

export const getAllPriest = () => axios.get(`${BASE_URL}${PRIEST_URL}`);
