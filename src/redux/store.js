import {combineReducers, createStore} from "redux";
import {playerReducer} from "./reducers/players";
import {heroReducer} from "./reducers/heroes";

const rootReducer = combineReducers({playerReducer, heroReducer});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
