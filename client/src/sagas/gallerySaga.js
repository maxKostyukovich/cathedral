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

export function* getAllGallerySaga() {
    yield put({ type: ACTION.GALLERY_REQUEST });
    try{
        const { data } = yield getAllGallery();
        yield put({type:ACTION.GET_ALL_GALLERY_RESPONSE, galleries: data});
    }catch (err) {
        yield put({type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* initializeGallerySaga({id}) {
    yield put({ type: ACTION.GALLERY_REQUEST });
    try{
        if(id) {
            const {data} = yield getSingleGallery(id);
            yield put({type: ACTION.INITIALIZE_GALLERY_RESPONSE, initializeGallery: data});
        }
    }catch (err) {
        yield put({type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* getSingleGallerySaga({ id }) {
    yield put({ type: ACTION.GALLERY_REQUEST });
    try{
        if(id) {
            const {data} = yield getSingleGallery(id);
            yield put({type: ACTION.GET_SINGLE_GALLERY_RESPONSE, singleGallery: data});
        }
    }catch (err) {
        yield put({type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* createGallerySaga({formData}) {
    try{
        if(formData) {
            const {data} = yield createGallery(formData);
            const state = yield select();
            const newData = _.cloneDeep(state.galleryReducer.galleries);
            newData.unshift(data);
            yield put({type: ACTION.CREATE_GALLERY_RESPONSE, addedGallery: newData});
        }
    } catch (err) {
        yield put({type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* deleteGallerySaga({ id }) {
    yield put({ type: ACTION.GALLERY_REQUEST });
    try{
        if(id) {
            yield deleteGallery(id);
            const state = yield select();
            const filtered = state.galleryReducer.galleries.filter(item => item.id !== id);
            yield put({type: ACTION.GET_ALL_GALLERY_RESPONSE, galleries: filtered});
        }
    } catch (err) {
        yield put({type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* updateGallerySaga({ id, gallery }) {
    yield put({type: ACTION.GALLERY_REQUEST});
    try {
        const formData = new FormData();
        for (const key in gallery) {
            if (gallery.hasOwnProperty(key)) {
                if (key === 'image'){
                    if (typeof gallery[key] === 'string') {
                        gallery.image = undefined;
                        continue;
                    }
                }
                formData.append(key, gallery[key])
            }
        }
        yield updateGallery(id, formData);
        const state = yield select();
        let index;
        const allGalleries = _.cloneDeep(state.galleryReducer.galleries);
        const updatedElement = allGalleries.find((elem, i) => {
            if (elem.id === id) {
                index = i;
                return elem
            }
        });
        allGalleries[index] =  (yield getSingleGallery(id)).data;
        yield put({type: ACTION.GET_ALL_GALLERY_RESPONSE, galleries: allGalleries})

    } catch (err) {
        yield put({
            type: ACTION.GALLERY_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            }
        })
    }
}
