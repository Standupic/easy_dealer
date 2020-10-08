import {NAV_BUTTON_CLICK} from "./types";

const initialState = {
  activeTab: null
}

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_BUTTON_CLICK:
      return {
        ...state,
        activeTab: action.payload
      }
    default:
      return state;
  }
}
