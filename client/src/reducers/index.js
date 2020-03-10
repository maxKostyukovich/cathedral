import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import newsReducer from './newsReducer'
import authReducer from "./authReducer";
const appReducer = combineReducers({
    form: formReducer,
    newsReducer,
    authReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;