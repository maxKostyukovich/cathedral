import ACTION from './actionTypes';

export const getAllNewsAction = (params) => ({
   type: ACTION.GET_ALL_NEWS_ACTION,
   params
});

export const getSingleNewsAction = (id) => ({
   type: ACTION.GET_SINGLE_NEWS_ACTION,
   id
});

export const createNewsAction = (formData) => ({
   type: ACTION.CREATE_NEWS_ACTION,
   formData
})

export const deleteNewsAction = (id) => ({
   type: ACTION.DELETE_NEWS_ACTION,
   id
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

export const createPriestAction = (priest) => ({
   type: ACTION.CREATE_PRIEST_ACTION,
   priest
})

export const deletePriestAction = (id) => ({
   type: ACTION.DELETE_PRIEST_ACTION,
   id
})

export const changeStatusModalFormAction = (isActive) => ({
   type: ACTION.MODAL_FORM_CHANGE_STATUS_ACTION,
   isActive
});
