import ACTION from '../actions/actionTypes';

const initialState = {
    user: null,
    isFetching: false,
    err: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.LOGIN_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                user: action.user
            };
        }
        case ACTION.LOGIN_REQUEST: {
            return {
                ...state,
                isFetching: true,
                err: null
            }
        }
        case ACTION.LOGOUT_CLEAR: {
            return {
                ...state,
                isFetching: false,
                err: null,
                user: null
            };
        }
        case ACTION.GET_USER_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                user: action.user
            };
        }
        case ACTION.LOGIN_ERROR: {
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
