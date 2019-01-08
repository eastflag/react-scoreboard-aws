import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
  getHighScore = () => {
    const highScore = this.props.players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }

  render() {
    const {players} = this.props;
    return (
      <div className="scoreboard">
        <Header players={players} />
        
        {/*Players List*/}
        { players.map((item, index) =>
          <Player name={item.name}
               score={item.score}
               key={item.id.toString()}
               index={index}
               isHighScore={item.score === this.getHighScore()}
               id={item.id} />)
        }
        <AddPlayerForm />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    players: state.playerReducer.players
  }
}

export default connect(mapStateToProps)(App);
