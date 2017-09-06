import { combineReducers } from 'redux';
import counter from '../counter/reducer';
import posts from '../posts/posts-reducer';

export default () => combineReducers({counter, posts});
