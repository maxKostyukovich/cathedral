import ACTION from './actionTypes';

export const createNewsAction = (formData) => ({
    type: ACTION.CREATE_NEWS_ACTION,
    formData
})

export const getUserAction = () => ({
    type: ACTION.GET_USER_ACTION
});

export const getAllNewsAction = (params) => ({
    type: ACTION.GET_ALL_NEWS_ACTION,
    params
});

export const getSingleNewsAction = (id) => ({
    type: ACTION.GET_SINGLE_NEWS_ACTION,
    id
});

export const deleteNewsAction = (id) => ({
   type: ACTION.DELETE_NEWS_ACTION,
   id
})

export const initializeNewsAction = (id) => ({
   type: ACTION.INITIALIZE_NEWS_ACTION,
   id
})

export const clearInitializeValuesAction = () => ({
   type: ACTION.CLEAR_INITIALIZE_VALUES_ACTION
})

export const updateNewsAction = (id, news) => ({
   type: ACTION.UPDATE_NEWS_ACTION,
   id,
   news
})

export const loginAction = (data) => ({
   type: ACTION.LOGIN_ACTION,
   data
});

export const getAllPriestsAction = () => ({
   type: ACTION.GET_ALL_PRIEST_ACTION
})

export const getSinglePriestAction = (id) => ({
   type: ACTION.GET_SINGLE_PRIEST_ACTION,
   id
})

export const createPriestAction = (formData) => ({
   type: ACTION.CREATE_PRIEST_ACTION,
    formData
})

export const deletePriestAction = (id) => ({
   type: ACTION.DELETE_PRIEST_ACTION,
   id
})

export const updatePriestAction = (id, priest) => ({
   type: ACTION.UPDATE_PRIEST_ACTION,
   id,
   priest
})

export const initializePriestAction = (id) => ({
    type: ACTION.INITIALIZE_PRIEST_ACTION,
    id
})

export const changeStatusModalFormAction = (isActive, status) => ({
   type: ACTION.MODAL_FORM_CHANGE_STATUS_ACTION,
   isActive,
   status
});

export const logoutAction = () => ({
   type: ACTION.LOGOUT_ACTION
});

export const initializeGalleryAction = (id) => ({
    type: ACTION.INITIALIZE_GALLERY_ACTION,
    id
})

export const updateGalleryAction = (id, gallery) => ({
    type: ACTION.UPDATE_GALLERY_ACTION,
    id,
    gallery
})

export const getAllGalleryAction = () => ({
    type: ACTION.GET_ALL_GALLERY_ACTION
})

export const getSingleGalleryAction = (id) => ({
    type: ACTION.GET_SINGLE_GALLERY_ACTION,
    id
})

export const createGalleryAction = (formData) => ({
    type: ACTION.CREATE_GALLERY_ACTION,
    formData
})

export const deleteGalleryAction = (id) => ({
    type: ACTION.DELETE_GALLERY_ACTION,
    id
});

export const initializeGalleryModalWindow = (image, title) => ({
   type: ACTION.INITIALIZE_GALLERY_MODAL_ACTION,
    image,
    title
});
