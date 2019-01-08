import {ADD_PLAYER, CHANGE_SCORE, UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}

export const changeScore = (index, delta) => {
  return {
    type: CHANGE_SCORE,
    index,
    delta
  }
}
