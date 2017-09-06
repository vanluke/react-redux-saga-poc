import {
  POST_FETCH_START,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILS,
} from './posts-constants';
import {
  postFetchStart,
  postFetchFails,
  postFetchSuccess,
} from './posts-action';
import postsReducer, {
  initState
} from './posts-reducer';

describe('Posts reducer', () => {
  it('should reduce init state', () => {
    const actual = postsReducer();
    const expected = {...initState};

    expect(actual).toEqual(expected);
  });

  it('should reduce posts fetch start', () => {
    const actual = postsReducer(initState, postFetchStart());
    const expected = {
      ...initState,
      isLoading: true,
    };

    expect(actual).toEqual(expected);
  });

  it('should reduce posts fetch success', () => {
    const actual = postsReducer(initState, postFetchSuccess({
      response: [],
    }));
    const expected = {
      ...initState,
      isLoading: false,
      posts: [],
    };

    expect(actual).toEqual(expected);
  });

  it('should reduce posts fetch fails', () => {
    const actual = postsReducer(initState, postFetchFails({
      error: {},
    }));
    const expected = {
      ...initState,
      isLoading: false,
      error: {},
    };

    expect(actual).toEqual(expected);
  })
});
