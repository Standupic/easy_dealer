import {NAV_BUTTON_CLICK} from "./constans";

const initialState = {
  activeTab: null
}

export const navigation = (state = initialState, action) => {
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
