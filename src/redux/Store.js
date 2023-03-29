import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import logger from "redux-logger"; //npm i redux-logger
import { composeWithDevTools } from "@redux-devtools/extension"; //npm install --save @redux-devtools/extension
import thunk from 'redux-thunk'; //npm install redux-thunk

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware( thunk))
);
export default store;
