import ACTION from '../actions/actionTypes';

const initialState = {
    isActive: false,
    status: '',
    imageModal: {}
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.MODAL_FORM_CHANGE_STATUS_ACTION: {
            return {
                ...state,
                imageModal: {},
                isActive: action.isActive,
                status: action.status
            };
        }
        case ACTION.INITIALIZE_GALLERY_MODAL_ACTION: {
            return {
                ...state,
                isActive: true,
                imageModal: {
                    image: action.image,
                    title: action.title
                }
            }
        }

        default: {
            return state;
        }
    }
}
