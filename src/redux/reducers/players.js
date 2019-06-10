import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, SET_ISSORTED, UPDATE_TITLE} from "../actionTypes";

let playerId = 4;

const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ],
  isSorted: false
}

export const playerReducer = (state = playerInitialState, action) => {
  let players;
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
      players = [...state.players];
      players.forEach((player, index) => {
        if (index === action.index) {
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players
      }
    case REMOVE_PLAYER:
      players = [...state.players];
      let index = players.findIndex(player => player.id === action.id);
      players.splice(index, 1)
      return {
        ...state,
        players
      }
    case SET_ISSORTED:
      state.isSorted = action.isSorted;
      return {
        ...state,
      }
    default:
      return state;
  }
}
