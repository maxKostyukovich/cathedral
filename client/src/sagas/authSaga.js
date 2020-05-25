import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes'
import {getUser, login} from "../api/restApi";
import history from '../history';
import {PATHS} from "../constants";


export function* checkLogin({ data: loginData }){
    yield put({ type: ACTION.LOGIN_REQUEST });
    try{
        const { data } = yield login(loginData);
        yield put({type:ACTION.LOGIN_RESPONSE, user: data.user});
        yield call(history.push, PATHS.ADMIN_PANEL);
    } catch(err){
        yield put({type: ACTION.LOGIN_ERROR, err: {
                message: err.response.data,
                status:err.response.status,
            } });
    }
}

export function* getUserSaga() {
    try{
        const { data } = yield getUser();
        yield put({ type: ACTION.GET_USER_RESPONSE, user: data });
    }  catch(err){
        yield put({type: ACTION.LOGIN_ERROR, err: {
                message: err.response.data,
                status:err.response.status,
            } });
    }
}

export function* logoutSaga() {
    yield put({type: ACTION.LOGOUT_CLEAR});
    localStorage.clear();
}
