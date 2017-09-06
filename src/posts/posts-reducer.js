import {
  POST_FETCH_START,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILS,
} from './posts-constants';

export const initState = {
  posts: [],
  isLoading: false,
  error: undefined,
};

export default function posts(state = initState, action = {}) {
  switch (action.type) {
    case POST_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload.response,
        isLoading: false,
      };
    case POST_FETCH_FAILS:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state
  }
}
