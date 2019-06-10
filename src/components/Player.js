import React from "react";
import PropTypes from 'prop-types';
import Counter from './Counter';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";
import classNames from 'classnames';

import styles from '../pages/scoreboard/Scoreboard.module.css';

class Player extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }
  
  render() {
    console.log(this.props.name, ' rendered');
    const {id, name, score, index, isHighScore, removePlayer} = this.props;

    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
          <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>x</button>
          {this.props.children}
          {name}
        </span>
        <Counter score={score} index={index} />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removePlayer: (id) => dispatch(removePlayer(id))
  }
}

export default connect(null, mapDispatchToProps)(Player);
