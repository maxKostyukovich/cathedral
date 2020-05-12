import ACTION from '../actions/actionTypes';

const initialState = {
    isActive: false
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.MODAL_FORM_CHANGE_STATUS_ACTION: {
            return {
                ...state,
                isActive: action.isActive
            };
        }
        default: {
            return state;
        }
    }
}
