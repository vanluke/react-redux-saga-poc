import React from 'react';
import PropTypes from 'prop-types';

export const Posts = ({isLoading, posts}) => (<section>
  {!isLoading
    ? posts.map(post => (<div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>))
    : null
  }
</section>);

Posts.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};
