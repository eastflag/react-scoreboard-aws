import React from "react";
import PropTypes from 'prop-types';
import Counter from './Counter';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

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
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
          <svg viewBox="0 0 44 35" className={isHighScore ? 'is-high-score' : ''}>
            <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
            <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
          </svg>
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
