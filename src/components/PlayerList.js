import React from 'react';
import {CustomPlayer} from "./CustomPlayer";

export class PlayerList extends React.Component {
  getHighScore() {
    const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }
  
  render() {
    return (
      <>
        <p style={{border: '1px solid #dddddd', margin: 0, padding: '1rem'}}>{this.props.playerState}</p>
      
        {/*Players List*/}
        {
          this.props.players.map((item, index) =>
            <CustomPlayer name={item.name}
                  score={item.score}
                  key={item.id.toString()}
                  index={index}
                  isHighScore={item.score === this.getHighScore()}
                  id={item.id} />)
        }
      </>
    )
  }
}
