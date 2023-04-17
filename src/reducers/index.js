import {combineReducers} from "redux";
import auth from "./authReducer.js";
import users from "./usersReducer.js";

export const reducers = combineReducers({
    auth,
    users
})