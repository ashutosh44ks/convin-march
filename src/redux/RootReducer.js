import cardReducer from "./cards/CardReducer";
import historyReducer from "./history/HistoryReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  cards: cardReducer,
  history: historyReducer,
});
export default RootReducer;
