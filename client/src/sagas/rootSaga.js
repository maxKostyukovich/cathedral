import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {
    getAllNewsSaga,
    getSingleNewsSaga,
    createNewsSaga,
    deleteNewsSaga,
    initializeNewsSaga,
    updateNewsSaga
} from "./newsSaga";
import {
    getAllPriestSaga,
    getSinglePriestSaga,
    updatePriestSaga,
    createPriestSaga,
    deletePriestSaga,
    initializePriestSaga
} from "./priestSaga";
import {checkLogin, getUserSaga, logoutSaga} from './authSaga'
function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_NEWS_ACTION, getAllNewsSaga);
    yield takeLatest(ACTION.GET_SINGLE_NEWS_ACTION, getSingleNewsSaga);
    yield takeLatest(ACTION.LOGIN_ACTION, checkLogin);
    yield takeLatest(ACTION.CREATE_NEWS_ACTION, createNewsSaga);
    yield takeLatest(ACTION.DELETE_NEWS_ACTION, deleteNewsSaga);
    yield takeLatest(ACTION.INITIALIZE_NEWS_ACTION, initializeNewsSaga);
    yield takeLatest(ACTION.UPDATE_NEWS_ACTION, updateNewsSaga);

    yield takeLatest(ACTION.GET_ALL_PRIEST_ACTION, getAllPriestSaga);
    yield takeLatest(ACTION.GET_SINGLE_PRIEST_ACTION, getSinglePriestSaga);
    yield takeLatest(ACTION.CREATE_PRIEST_ACTION, createPriestSaga);
    yield takeLatest(ACTION.DELETE_PRIEST_ACTION, deletePriestSaga);
    yield takeLatest(ACTION.UPDATE_PRIEST_ACTION, updatePriestSaga);
    yield takeLatest(ACTION.INITIALIZE_PRIEST_ACTION, initializePriestSaga);

    yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
    yield takeLatest(ACTION.LOGOUT_ACTION, logoutSaga);



}

export default rootSaga;
