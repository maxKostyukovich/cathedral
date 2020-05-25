import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllNews, getSingleNews, createNews, deleteNews, updateNews} from "../api/restApi";
import _ from 'lodash'
import {nl2br} from "../utils/util";
export function* getAllNewsSaga({ params }) {
    yield put({ type: ACTION.NEWS_REQUEST });
    try{
        const { data } = yield getAllNews(params);
        yield put({type:ACTION.GET_ALL_NEWS_RESPONSE, news: data});
    }catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* initializeNewsSaga({id}) {
    yield put({ type: ACTION.NEWS_REQUEST });
    try{
        if(id) {
            const {data} = yield getSingleNews(id);
            yield put({type: ACTION.INITIALIZE_NEWS_RESPONSE, initializeNews: data});
        }
    }catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* getSingleNewsSaga({ id }) {
    yield put({ type: ACTION.NEWS_REQUEST });
    try{
        if(id) {
            const {data} = yield getSingleNews(id);
            yield put({type: ACTION.GET_SINGLE_NEWS_RESPONSE, singleNews: data});
        }
    }catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* createNewsSaga({formData}) {
    try{
        if(formData) {
            const {data} = yield createNews(formData);
            const state = yield select();
            const newData = _.cloneDeep(state.newsReducer.news);
            newData.push(data);
            yield put({type: ACTION.CREATE_NEWS_RESPONSE, addedNews: newData});
        }
    } catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* deleteNewsSaga({ id }) {
    yield put({ type: ACTION.NEWS_REQUEST });
    try{
        if(id) {
            yield deleteNews(id);
            const state = yield select();
            const filteredEmployees = state.newsReducer.news.filter(item => item.id !== id);
            yield put({type: ACTION.GET_ALL_NEWS_RESPONSE, news: filteredEmployees});
        }
    } catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* updateNewsSaga({ id, news }) {
    yield put({type: ACTION.NEWS_REQUEST});
    try {
        const formData = new FormData();
        for (const key in news) {
            if (news.hasOwnProperty(key)) {
                if (key === 'date'){
                    news[key] = (new Date(news[key])).toJSON()
                }
                if (key === 'content') {
                    news[key] = nl2br(news[key])
                }
                if (key === 'main_img'){
                    if (typeof news[key] === 'string') {
                        news.main_img = undefined;
                        continue;
                    }
                }
                formData.append(key, news[key])
            }
        }
        yield updateNews(id, formData);
        const state = yield select();
        let index;
        const allNews = _.cloneDeep(state.newsReducer.news);
        const updatedElement = allNews.find((elem, i) => {
            if (elem.id === id) {
                index = i;
                return elem
            }
        });
        allNews[index] =  (yield getSingleNews(id)).data;
        yield put({type: ACTION.GET_ALL_NEWS_RESPONSE, news: allNews})

    } catch (err) {
        yield put({
            type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            }
        })
    }
}
