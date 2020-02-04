import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import newsReducer from './newsReducer'
const appReducer = combineReducers({
    form: formReducer,
    newsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;