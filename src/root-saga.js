import { all, fork } from 'redux-saga/effects';
import counterSaga from './counter/sagas';
import postsSaga from './posts/posts-sagas';

export default function* root() {
  yield all([
    fork(postsSaga),
    fork(counterSaga),
  ]);
}
