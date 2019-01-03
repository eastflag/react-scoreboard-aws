import React from "react";
import Counter from './Counter';

class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, ' rendered');
    const {id, name, score, index, removePlayer, changeScore} = this.props;
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className="player-name">
        {name}
      </span>
        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
