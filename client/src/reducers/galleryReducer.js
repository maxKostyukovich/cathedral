import ACTION from '../actions/actionTypes';

const initialState = {
    galleries: [],
    singleGallery: {},
    initializeGallery: {},
    isFetching: false,
    err: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_GALLERY_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                galleries: action.galleries
            };
        }
        case ACTION.GET_SINGLE_GALLERY_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                singleGallery: action.singlePriest
            }
        }
        case ACTION.CREATE_GALLERY_RESPONSE: {
            return {
                ...state,
                err: null,
                galleries: action.addedGallery
            };
        }
        case ACTION.CLEAR_INITIALIZE_VALUES_ACTION: {
            return {
                ...state,
                initializePriest: {}
            }
        }
        case ACTION.INITIALIZE_GALLERY_RESPONSE: {
            return {
                ...state,
                err: null,
                initializeGallery: action.initializeGallery
            }
        }
        case ACTION.PRIEST_REQUEST: {
            return {
                ...state,
                isFetching: true,
                err: null,
            };
        }
        case ACTION.PRIEST_ERROR: {
            return {
                ...state,
                isFetching: false,
                err: action.err,
            };
        }
        default:
            return state;
    }
}
