import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import newsReducer from './newsReducer'
import authReducer from "./authReducer";
import priestReducer from "./priestReducer";
import helperReducer from "./helperReducer";
import galleryReducer from './galleryReducer'
const appReducer = combineReducers({
    form: formReducer,
    newsReducer,
    authReducer,
    priestReducer,
    helperReducer,
    galleryReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
