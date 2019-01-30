import React from "react";
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import classNames from 'classnames';

import styles from '../pages/scoreboard/Scoreboard.module.css';

const Counter = ({index, score, changeScore}) => {
  return (
    <div className={styles.counter}>
      <button className={classNames(styles["counter-action"], styles.decrement)} onClick={() => changeScore(index, -1)}> - </button>
      <span className={styles["counter-score"]}>{score}</span>
      <button className={classNames(styles["counter-action"], styles.increment)} onClick={() => changeScore(index, 1)}> + </button>
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
