import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllNewsSaga, getSingleNewsSaga, createNewsSaga, deleteNewsSaga} from "./newsSaga";
import {getAllPriestSaga} from "./priestSaga";
import {checkLogin} from './authSaga'
function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_NEWS_ACTION, getAllNewsSaga);
    yield takeLatest(ACTION.GET_SINGLE_NEWS_ACTION, getSingleNewsSaga);
    yield takeLatest(ACTION.LOGIN_ACTION, checkLogin);
    yield takeLatest(ACTION.CREATE_NEWS_ACTION, createNewsSaga);
    yield takeLatest(ACTION.GET_ALL_PRIEST_ACTION, getAllPriestSaga);
    yield takeLatest(ACTION.DELETE_NEWS_ACTION, deleteNewsSaga);
}

export default rootSaga;
