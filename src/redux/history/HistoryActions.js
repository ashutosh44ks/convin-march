import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
} from "./HistoryTypes";
// Action Creators
import axios from "axios";

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
export const addItem = (name, link) => {
  return (dispatch) => {
    dispatch(addItemRequest());
    axios
      .post("http://localhost:3004/history", {
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
