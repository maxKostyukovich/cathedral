import axios from './interceptors'
import {BASE_URL, NEWS_URL, REFRESH_URL, LOGIN_URL, PRIEST_URL, USER_URL} from "./ConstantURLs";
import {setTokensToLocalStorage} from "../utils/localStorageUtil";

export const createNews = data => axios.post(`${BASE_URL}${NEWS_URL}`, data);
export const getAllNews = params => axios.get(`${BASE_URL}${NEWS_URL}`, {params});
export const getSingleNews = id => axios.get(`${BASE_URL}${NEWS_URL}/${id}`);
export const deleteNews = id => axios.delete(`${BASE_URL}${NEWS_URL}/${id}`);
export const updateNews = (id , news) => axios.put(`${BASE_URL}${NEWS_URL}/${id}`, news);

export const login = data => axios.post(`${BASE_URL}${LOGIN_URL}`, data).then(setTokensToLocalStorage);
export const refreshTokens = refreshToken => axios.post(`${BASE_URL}${REFRESH_URL}`, {refreshToken}).then(setTokensToLocalStorage).catch(e => Promise.reject(e));
export const getUser = () => axios.get(`${BASE_URL}${USER_URL}`);

export const getAllPriest = () => axios.get(`${BASE_URL}${PRIEST_URL}`);
export const getSinglePriest = id => axios.get(`${BASE_URL}${PRIEST_URL}/${id}`);
export const createPriest = data => axios.post(`${BASE_URL}${PRIEST_URL}`, data);
export const deletePriest = id => axios.delete(`${BASE_URL}${PRIEST_URL}/${id}`);
export const updatePriest = (id, priest) => axios.put(`${BASE_URL}${PRIEST_URL}/${id}`, priest);
