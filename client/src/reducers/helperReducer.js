import ACTION from '../actions/actionTypes';

const initialState = {
    isActive: false,
    status: ''
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.MODAL_FORM_CHANGE_STATUS_ACTION: {
            return {
                ...state,
                isActive: action.isActive,
                status: action.status
            };
        }
        default: {
            return state;
        }
    }
}
