import {combineReducers, createStore} from "redux";
import {playerReducer} from "./reducers/players";

const rootReducer = combineReducers({playerReducer});

export const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);
