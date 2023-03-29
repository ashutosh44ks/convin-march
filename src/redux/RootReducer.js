import cardReducer from "./cards/CardReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cards: cardReducer,
});
export default RootReducer;
