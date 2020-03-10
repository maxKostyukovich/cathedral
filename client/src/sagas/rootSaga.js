import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllNewsSaga, getSingleNewsSaga} from "./newsSaga";
import {checkLogin} from './authSaga'
function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_NEWS_ACTION, getAllNewsSaga);
    yield takeLatest(ACTION.GET_SINGLE_NEWS_ACTION, getSingleNewsSaga);
    yield takeLatest(ACTION.LOGIN_ACTION, checkLogin);
}

export default rootSaga;