import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from "./HistoryTypes";
// Action Creators
import axios from "axios";

export const getItemsRequest = () => ({
  type: GET_ITEMS_REQUEST,
});
export const getItemsSuccess = (history) => ({
  type: GET_ITEMS_SUCCESS,
  payload: history,
});
export const getItemsFailure = (error) => ({
  type: GET_ITEMS_FAILURE,
  payload: error,
});
export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST,
});
export const addItemSuccess = (history) => ({
  type: ADD_ITEM_SUCCESS,
  payload: history,
});
export const addItemFailure = (error) => ({
  type: ADD_ITEM_FAILURE,
  payload: error,
});
export const getItems = () => {
  return (dispatch) => {
    dispatch(getItemsRequest());
    axios
      .get(process.env.REACT_APP_BASE_API_URL + "/history")
      .then((response) => {
        const history = response.data;
        dispatch(getItemsSuccess(history));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getItemsFailure(errorMsg));
      });
  };
};
export const addItem = (name, link) => {
  return (dispatch) => {
    dispatch(addItemRequest());
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/history", {
        name,
        link,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      })
      .then((response) => {
        const history = response.data;
        dispatch(addItemSuccess(history));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(addItemFailure(errorMsg));
      });
  };
};
