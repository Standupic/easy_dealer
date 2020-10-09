import {combineReducers} from "redux";
import login from "../components/login/Login";
import navigation from "../components/navigation/navigation";

const reducer = combineReducers({
  login,
  navigation
})

export default reducer