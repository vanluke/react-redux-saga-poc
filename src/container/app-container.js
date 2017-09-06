import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {
  updateLocation,
} from './container-action';

export class AppContainer extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const {updateLocation} = this.props;
    updateLocation(nextProps.location);
  }

  render() {
    const {children} = this.props;
    return (<main>{children}</main>);
  }
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export const mapDispatchToProps = dispatch => ({
  updateLocation: location => dispatch(updateLocation(location)),
})

export default withRouter(connect(null, mapDispatchToProps)(AppContainer));
