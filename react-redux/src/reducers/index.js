import { combineReducers } from "redux";
import postReducers from "./postReducers.js"


export default combineReducers({
    posts:postReducers
})
