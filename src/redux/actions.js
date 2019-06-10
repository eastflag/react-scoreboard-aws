import {ADD_PLAYER, CHANGE_SCORE, REFRESH_HERO, REMOVE_PLAYER, SET_ISSORTED, UPDATE_TITLE} from "./actionTypes";

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

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}

export const refreshHero = () => {
  return {
    type: REFRESH_HERO
  }
}

export const setIsSorted = (isSorted) => {
  return {
    type: SET_ISSORTED,
    isSorted
  }
}
