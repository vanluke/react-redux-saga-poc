import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  INCREMENT,
  INCREMENT_IF_ODD,
  DECREMENT,
  INCREMENT_ASYNC,
} from './constants';

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: INCREMENT});
}

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
