import {LOGIN, NAV_BUTTON_CLICK} from "./types";

export function login() {
  return {
    type: LOGIN,
    payload: null
  }
}

export function navItemClick(id) {
  return {
    type: NAV_BUTTON_CLICK,
    payload: id
  }
}
