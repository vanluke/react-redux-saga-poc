import {
  POST_FETCH_START,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILS,
} from './posts-constants';

export const action = type => (payload = {}) => ({type, payload});
export const actionPlain = type => ({type});

export const postFetchStart = () => actionPlain(POST_FETCH_START);
export const postFetchFails = payload => action(POST_FETCH_FAILS)(payload);
export const postFetchSuccess = payload => action(POST_FETCH_SUCCESS)(payload);
