import {REFRESH_HERO} from "../actionTypes";

const heroInitialState = {
  refresh_count: 0
}
export const heroReducer = (state = heroInitialState, action) => {
  switch (action.type) {
    case REFRESH_HERO:
      return {
        ...state,
        refresh_count: state.refresh_count + 1
      }
    default:
      return state;

  }
}