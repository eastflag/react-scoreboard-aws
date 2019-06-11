import React from 'react';
import {CustomPlayer} from "./CustomPlayer";

import styles from '../pages/scoreboard/Scoreboard.module.css'

export class PlayerList extends React.Component {
  getHighScore() {
    const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }
  
  render() {
    let titleClass = styles['all-title'];
    if (this.props.playerState.indexOf('All') >= 0) {
      titleClass = styles['all-title'];
    } else if (this.props.playerState.indexOf('Good') >= 0) {
      titleClass = styles['good-title'];
    } else if (this.props.playerState.indexOf('Bad') >= 0) {
      titleClass = styles['bad-title'];
    }
    
    return (
      <>
        <p className={titleClass}>{this.props.playerState}</p>
      
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
