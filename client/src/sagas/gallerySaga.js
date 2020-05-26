import { put, call, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {
    getAllGallery,
    getSingleGallery,
    createGallery,
    updateGallery,
    deleteGallery
} from "../api/restApi";
import _ from "lodash";
import {nl2br} from "../utils/util";

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

export function* initializePriestSaga({id}) {
    yield put({ type: ACTION.PRIEST_REQUEST });
    try{
        if(id) {
            const {data} = yield getSinglePriest(id);
            yield put({type: ACTION.INITIALIZE_PRIEST_RESPONSE, initializePriest: data});
        }
    }catch (err) {
        yield put({type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* getSinglePriestSaga({ id }) {
    yield put({ type: ACTION.PRIEST_REQUEST });
    try{
        if(id) {
            const {data} = yield getSinglePriest(id);
            yield put({type: ACTION.GET_SINGLE_PRIEST_RESPONSE, singlePriest: data});
        }
    }catch (err) {
        yield put({type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* createPriestSaga({formData}) {
    try{
        if(formData) {
            const {data} = yield createPriest(formData);
            const state = yield select();
            const newData = _.cloneDeep(state.priestReducer.priests);
            newData.unshift(data);
            yield put({type: ACTION.CREATE_PRIEST_RESPONSE, addedPriest: newData});
        }
    } catch (err) {
        yield put({type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* deletePriestSaga({ id }) {
    yield put({ type: ACTION.PRIEST_REQUEST });
    try{
        if(id) {
            yield deletePriest(id);
            const state = yield select();
            const filtered = state.priestReducer.priests.filter(item => item.id !== id);
            yield put({type: ACTION.GET_ALL_PRIEST_RESPONSE, priests: filtered});
        }
    } catch (err) {
        yield put({type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* updatePriestSaga({ id, priest }) {
    yield put({type: ACTION.PRIEST_REQUEST});
    try {
        const formData = new FormData();
        for (const key in priest) {
            if (priest.hasOwnProperty(key)) {
                if (key === 'biography') {
                    priest[key] = nl2br(priest[key])
                }
                if (key === 'avatar'){
                    if (typeof priest[key] === 'string') {
                        priest.avatar = undefined;
                        continue;
                    }
                }
                formData.append(key, priest[key])
            }
        }
        yield updatePriest(id, formData);
        const state = yield select();
        let index;
        const allPriests = _.cloneDeep(state.priestReducer.priests);
        const updatedElement = allPriests.find((elem, i) => {
            if (elem.id === id) {
                index = i;
                return elem
            }
        });
        allPriests[index] =  (yield getSinglePriest(id)).data;
        yield put({type: ACTION.GET_ALL_PRIEST_RESPONSE, priests: allPriests})

    } catch (err) {
        yield put({
            type: ACTION.PRIEST_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            }
        })
    }
}
