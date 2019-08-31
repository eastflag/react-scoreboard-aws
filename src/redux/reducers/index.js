import {combineReducers} from "redux";
import {playerReducer} from "./players";
import {heroReducer} from "./heroes";

export const allReducers = combineReducers({playerReducer, heroReducer});
