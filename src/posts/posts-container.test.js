import React from 'react';
import sinon from 'sinon';
import {
  PostContainer,
} from './posts-container';
import {Posts} from './posts';
import {mount} from 'enzyme';

describe('Posts Container', () => {
  const props = {
    isLoading: false,
    posts: [],
    fetchPosts: jest.fn(),
  }

  it('should render', () => {
    const wrapper = mount(<PostContainer
      {...props}
    />);
    expect(wrapper.find(Posts).length).toBeGreaterThan(0);
  });

  it('should have props', () => {
    const wrapper = mount(<PostContainer
      {...props}
    />);
    expect(wrapper.props()).toEqual(props);
  });

  it('should call componentDidMount', () => {
    sinon.spy(PostContainer.prototype, 'componentDidMount');
    const wrapper = mount(<PostContainer {...props} />);
    expect(PostContainer.prototype.componentDidMount.calledOnce).toEqual(true);
    PostContainer.prototype.componentDidMount.restore();
  });

  it('should call fetchPosts', () => {
    global.setTimeout = (fn, t) => fn();
    sinon.spy(PostContainer.prototype, 'componentDidMount');
    sinon.spy(props, 'fetchPosts');
    const wrapper = mount(<PostContainer {...props} />);
    expect(props.fetchPosts.calledOnce).toEqual(true);
    PostContainer.prototype.componentDidMount.restore();
  });
});
