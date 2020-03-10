import ACTION from './actionTypes';

export const getAllNewsAction = (params) => ({
   type: ACTION.GET_ALL_NEWS_ACTION,
   params
});

export const getSingleNewsAction = (id) => ({
   type: ACTION.GET_SINGLE_NEWS_ACTION,
   id
});

export const loginAction = (data) => ({
   type: ACTION.LOGIN_ACTION,
   data
});