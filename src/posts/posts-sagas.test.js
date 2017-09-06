import { call, fork, put, select, take } from 'redux-saga/effects';
import * as actions from './posts-action';
import rootSaga, {loadPosts} from './posts-sagas';
import {getPosts} from './posts-service';

describe('Posts Saga', () => {
  describe('loadPosts saga', () => {
    const generator = loadPosts();

    it('should fetch start', () => {
      const expected = call(getPosts);
      const actual = generator.next().value;
      expect(expected)
        .toEqual(actual);
    });

    it('should put fetch success', () => {
      const expected = put(actions.postFetchSuccess());
      const actual = generator.next().value;
      expect(expected)
        .toEqual(actual);
    });

    it('should put fetch fails', () => {
      const expected = put(actions.postFetchFails());
      const actual = generator.throw().value;

      expect(expected)
        .toEqual(actual);
    });
  });
});
