import { put, call, takeLatest } from 'redux-saga/effects';
import {
  postFetchStart,
  postFetchFails,
  postFetchSuccess,
} from './posts-action';
import {
  getPosts,
} from './posts-service';

export function* loadPosts() {
   try {
     const posts = yield call(getPosts);
     yield put(postFetchSuccess(posts));
   } catch(e) {
     yield put(postFetchFails(e));
   }
}


export default function* rootSaga() {
  yield takeLatest(postFetchStart().type, loadPosts);
}
