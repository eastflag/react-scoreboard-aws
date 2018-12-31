import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  
  handleChangeScore = (index, delta) => {
    console.log('index: ' + index, 'delta: ' + delta);
    this.setState(prevState => {
      prevState.players[index].score += delta;
      return prevState;
    });
  }
  
  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);
      
      return {
        players: [
          ...prevState.players,
          {id: maxId + 1, name, score: 0}
        ]
      }
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />
        
        {/*Players List*/}
        { this.state.players.map((item, index) =>
          <Player name={item.name}
               score={item.score}
               key={item.id.toString()}
               removePlayer={this.handleRemovePlayer}
               changeScore={this.handleChangeScore}
               index={index}
               id={item.id} />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
