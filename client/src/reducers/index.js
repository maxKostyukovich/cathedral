import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import newsReducer from './newsReducer'
import authReducer from "./authReducer";
import priestReducer from "./priestReducer";
const appReducer = combineReducers({
    form: formReducer,
    newsReducer,
    authReducer,
    priestReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
