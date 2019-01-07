import {UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title
  }
}
