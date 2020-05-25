import ACTION from '../actions/actionTypes';

const initialState = {
    priests: [],
    singlePriest: {},
    initializePriest: {},
    isFetching: false,
    err: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_PRIEST_RESPONSE: {
            console.log(action.priests);
            return {
                ...state,
                isFetching: false,
                err: null,
                priests: action.priests
            };
        }
        case ACTION.GET_SINGLE_PRIEST_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                singlePriest: action.singlePriest
            }
        }
        case ACTION.CREATE_PRIEST_RESPONSE: {
            return {
                ...state,
                err: null,
                priests: action.addedPriest
            };
        }
        case ACTION.CLEAR_INITIALIZE_VALUES_ACTION: {
            return {
                ...state,
                initializePriest: {}
            }
        }
        case ACTION.INITIALIZE_PRIEST_RESPONSE: {
            return {
                ...state,
                err: null,
                initializePriest: action.initializePriest
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
