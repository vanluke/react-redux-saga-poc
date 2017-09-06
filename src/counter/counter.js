import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  INCREMENT,
  INCREMENT_IF_ODD,
  DECREMENT,
} from './constants';

const Counter = ({ value, onIncrement, onDecrement }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export const action = type => ({
  type,
});

export default connect((state) => ({
  value: state.counter,
}), (dispatch) => ({
  onIncrement: () => dispatch(action(INCREMENT)),
  onDecrement: () => dispatch(action(DECREMENT)),
}))(Counter);
