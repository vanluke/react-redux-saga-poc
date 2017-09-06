import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from './saga-monitor';

const logger = createLogger && createLogger();

export const create = (reducer) => {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
  return {
    store,
    run: sagaMiddleware.run,
  }
};
