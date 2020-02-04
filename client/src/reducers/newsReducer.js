import ACTION from '../actions/actionTypes';

const initialState = {
    news: [],
    singleNews: {},
    isFetching: false,
    err: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_NEWS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                news: action.news
            };
        }
        case ACTION.GET_SINGLE_NEWS_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                singleNews: action.singleNews
            }
        }
        case ACTION.NEWS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                err: null,
            };
        }
        case ACTION.NEWS_ERROR: {
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