import axios from 'axios'
import { BASE_URL, NEWS_URL } from "./ConstantURLs";

export const createNews = data => axios.post(`${BASE_URL}${NEWS_URL}`, data);
