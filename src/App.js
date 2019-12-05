import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {useSelector} from 'react-redux';
import {SearchBar} from "./components/SearchBar";

function App() {
  let players = useSelector(state => state.playerReducer.players);
  const keyword = useSelector(state => state.playerReducer.keyword);
  if (keyword) {
    players = players.filter(item => item.name.indexOf(keyword) >= 0);
  }

  const getHighScore = () => {
    const highScore = players.reduce((maxScore, player) => maxScore > player.score ? maxScore : player.score, 0);
    return highScore > 0 ? highScore : null;
  }

  return (
    <div className="scoreboard">
      <Header players={players} />

      <SearchBar/>
      {/*Players List*/}
      { players.map((item, index) =>
        <Player name={item.name}
                score={item.score}
                key={item.id.toString()}
                index={index}
                isHighScore={item.score === getHighScore()}
                id={item.id} />)
      }
      <AddPlayerForm />
    </div>
  );
}

export default App;
