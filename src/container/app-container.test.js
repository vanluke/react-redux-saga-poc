import React from 'react';
import sinon from 'sinon';
import { BrowserRouter } from 'react-router-dom';
import {
  AppContainer,
} from './app-container';
import {mount} from 'enzyme';

describe('App Container', () => {
  const props = {
    updateLocation: sinon.spy(),
    children: (<div></div>),
  };

  it('should render', () => {
    const wrapper = mount(<BrowserRouter><AppContainer
      {...props}
    /></BrowserRouter>);
    expect(wrapper.find(AppContainer).length).toBeGreaterThan(0);
  });

  it('should have props', () => {
    const wrapper = mount(<BrowserRouter><AppContainer
      {...props}
    /></BrowserRouter>);
    expect(wrapper.find(AppContainer).props()).toEqual(props);
  });
});
