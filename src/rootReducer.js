import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./reducers/auth";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth
  });
