import React from "react";
import Counter from './Counter';

class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, ' rendered');
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
      </span>
        <span className="player-name">
        {this.props.name}
      </span>
        <Counter score={this.props.score} index={this.props.index} changeScore={this.props.changeScore} />
      </div>
    );
  }
}

export default Player;
