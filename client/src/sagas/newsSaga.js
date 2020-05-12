import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllNews, getSingleNews, createNews, deleteNews} from "../api/restApi";

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
            const newData = [...state.newsReducer.news];
            newData.push(data);
            yield put({type: ACTION.GET_SINGLE_NEWS_RESPONSE, addedNews: newData});
        }
    }catch (err) {
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
    }catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}
