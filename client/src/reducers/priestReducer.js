import ACTION from '../actions/actionTypes';

const initialState = {
    priests: [],
    singlePriest: {},
    isFetching: false,
    err: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_PRIEST_RESPONSE: {
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
