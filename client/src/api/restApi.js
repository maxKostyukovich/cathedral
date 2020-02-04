import axios from 'axios'
import { BASE_URL, NEWS_URL } from "./ConstantURLs";

export const createNews = data => axios.post(`${BASE_URL}${NEWS_URL}`, data);
export const getAllNews = limit => axios.get(`${BASE_URL}${NEWS_URL}`, {params:{limit}});
export const getSingleNews = id => axios.get(`${BASE_URL}${NEWS_URL}/${id}`);
