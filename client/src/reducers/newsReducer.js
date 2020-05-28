import ACTION from '../actions/actionTypes';
const initialState = {
    news: [],
    singleNews: {},
    initializeNews: {},
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
        case ACTION.CREATE_NEWS_RESPONSE: {
            return {
                ...state,
                err: null,
                news: action.addedNews
            };
        }
        case ACTION.INITIALIZE_NEWS_RESPONSE: {
            return {
                ...state,
                err: null,
                initializeNews: action.initializeNews
            }
        }
        case ACTION.NEWS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                err: null,
            };
        }
        case ACTION.CLEAR_INITIALIZE_VALUES_ACTION: {
            return {
                ...state,
                initializeNews: {}
            }
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
