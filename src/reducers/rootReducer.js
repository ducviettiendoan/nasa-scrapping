import {combineReducers} from "redux";
import pictures from "./reducers";

const rootReducer = combineReducers({
   pictures,
});

export default rootReducer;