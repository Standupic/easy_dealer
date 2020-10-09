import {LOGIN} from "./types";

const initialState = {
  isLogin: false
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true
      }
    default:
      return state;
  }
}
