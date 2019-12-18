import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;