import { combineReducers } from "redux";
import authReducer from "./authReducers";

const reducer = combineReducers({
    auth: authReducer,
});

export default reducer;