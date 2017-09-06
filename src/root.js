import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './app';
import AppContainer from './container/app-container';
import Posts from './posts/posts-container'
import Counter from './counter/counter';
import {
  reducer
} from './reducer';
import configureStore from './store';
import saga from './root-saga';
const {store, run} = configureStore(reducer());

render(<Provider store={store}>
  <BrowserRouter>
    <AppContainer>
      <App />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/posts" component={Posts}/>
      </Switch>
    </AppContainer>
  </BrowserRouter>
</Provider>, document.getElementById('root'));

run(saga);
