import React from "react";
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {useDispatch} from "react-redux";

const Counter = ({index, score}) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => dispatch(changeScore(index, -1))}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => dispatch(changeScore(index, 1))}> + </button>
    </div>
  )
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number
}

export default Counter;
