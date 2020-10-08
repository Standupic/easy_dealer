import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {navReducer} from "./navReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  navigation: navReducer
})
