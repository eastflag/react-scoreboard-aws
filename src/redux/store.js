import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, UPDATE_TITLE} from "./actionTypes";

let playerId = 4;

const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
}

const playerReducer = (state = playerInitialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            id: ++playerId
          }
        ]
      }
    case CHANGE_SCORE:
      const players = [...state.players];
      players.forEach((player, index) => {
        if (index === action.index) {
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({playerReducer});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
