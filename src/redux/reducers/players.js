import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, SEARCH_NAME, SET_ISSORTED, UPDATE_TITLE} from "../actionTypes";

let playerId = 4;

const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ],
  filteredPlayers: [],
  isSorted: false,
  keyword: ''
};

playerInitialState.filteredPlayers = playerInitialState.players;

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
      players.forEach((player) => {
        if (player.id === action.id) {
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
    case SEARCH_NAME:
      const filteredPlayers = state.players.filter(item => item.name.indexOf(action.name) >= 0);
      return {
        ...state,
        filteredPlayers,
        keyword: action.name
      }
    default:
      return state;
  }
}
