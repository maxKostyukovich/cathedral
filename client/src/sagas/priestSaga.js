import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getAllPriest } from "../api/restApi";

export function* getAllPriestSaga() {
    yield put({ type: ACTION.PRIEST_REQUEST });
    try{
        const { data } = yield getAllPriest();
        yield put({type:ACTION.GET_ALL_PRIEST_RESPONSE, priests: data});
    }catch (err) {
        yield put({type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

