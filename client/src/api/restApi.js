import axios from './interceptors'
import { BASE_URL, NEWS_URL, REFRESH_URL } from "./ConstantURLs";
import {setTokensToLocalStorage} from "../utils/localStorageUtil";

export const createNews = data => axios.post(`${BASE_URL}${NEWS_URL}`, data);
export const getAllNews = limit => axios.get(`${BASE_URL}${NEWS_URL}`, {params:{limit}});
export const getSingleNews = id => axios.get(`${BASE_URL}${NEWS_URL}/${id}`);
export const refreshTokens = refreshToken => axios.post(`${BASE_URL}${REFRESH_URL}`, {refreshToken}).then(setTokensToLocalStorage).catch(e => Promise.reject(e));
