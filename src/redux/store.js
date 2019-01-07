import {combineReducers, createStore} from "redux";
import {UPDATE_TITLE} from "./actionTypes";

const playerInitialState = {
  title: 'My Scoreboard',
}

const playerReducer = (state = playerInitialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({playerReducer});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
