import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Posts} from './posts';
import {
  connect,
} from 'react-redux';
import {
  postFetchStart,
} from './posts-action';
import {
  fetchPosts,
} from './posts-sagas';

export class PostContainer extends PureComponent {
  componentDidMount() {
    const {fetchPosts} = this.props;
    setTimeout(() => fetchPosts(), 0);
  }

  render() {
    const {isLoading, posts} = this.props;
    return (<Posts
      isLoading={isLoading}
      posts={posts}
    />);
  }
}

PostContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }).isRequired),
  fetchPosts: PropTypes.func.isRequired,
};

export default connect(state => ({
  isLoading: state.posts.isLoading,
  posts: state.posts.posts,
}), dispatch => ({
  fetchPosts: () => dispatch(postFetchStart()),
}))(PostContainer);
