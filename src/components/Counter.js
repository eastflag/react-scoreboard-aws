import React from "react";
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";

const Counter = ({index, score, changeScore}) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  )
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeScore: (index, delta) => dispatch(changeScore(index, delta))
  }
}

export default connect(null, mapDispatchToProps)(Counter);
