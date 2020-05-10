import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllNews, getSingleNews, createNews} from "../api/restApi";

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

export function* createNewsSaga({news}) {
    try{
        if(news) {
            const {data} = yield createNewsSaga(news);
            yield put({type: ACTION.GET_SINGLE_NEWS_RESPONSE, newNews: data});
        }
    }catch (err) {
        yield put({type: ACTION.NEWS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}
