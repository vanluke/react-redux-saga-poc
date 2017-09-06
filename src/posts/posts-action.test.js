import {
  POST_FETCH_START,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAILS,
} from './posts-constants';
import * as actions from './posts-action';

describe('Posts actions', () => {
  it('should postFetchStart handle fetch post start', () => {
    const actual = actions.postFetchStart();
    const expected = {
      type: POST_FETCH_START,
    };

    expect(actual).toEqual(expected);
  });

  it('should postFetchFails handle error', () => {
    const actual = actions.postFetchFails({
      error: {},
    });
    const expected = {
      type: POST_FETCH_FAILS,
      payload: {
        error: {},
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should postFetchSuccess return POST_FETCH_SUCCESS type', () => {
    const actual = actions.postFetchSuccess({
      response: {},
    });
    const expected = {
      type: POST_FETCH_SUCCESS,
      payload: {
        response: {},
      },
    };

    expect(actual).toEqual(expected);
  });

  it('should action return function', () => {
    const actual = actions.action(POST_FETCH_SUCCESS);
    expect(typeof actual).toBe('function');
  });

  it('should action create action creator', () => {
    const actual = actions.action(POST_FETCH_SUCCESS)();
    expect(actual.type).toBe(POST_FETCH_SUCCESS);
  });

  it('should actionPlain create action creator', () => {
    const actual = actions.actionPlain(POST_FETCH_SUCCESS);
    expect(actual.type).toBe(POST_FETCH_SUCCESS);
  });
});
