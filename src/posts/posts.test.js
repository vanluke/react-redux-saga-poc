import React from 'react';
import ReactDOM from 'react-dom';
import {Posts} from './posts';

describe('Posts Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      posts: [],
      isLoading: false,
    };
    ReactDOM.render(<Posts
      {...props}
    />, div);
  });
});
