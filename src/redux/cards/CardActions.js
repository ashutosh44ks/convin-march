import {
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  GET_CARDS_FAILURE,
  CREATE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  EDIT_CARD_REQUEST,
  EDIT_CARD_SUCCESS,
  EDIT_CARD_FAILURE,
} from "./CardTypes";
// Action Creators
import axios from "axios";

export const getCardsRequest = () => ({
  type: GET_CARDS_REQUEST,
});
export const getCardsSuccess = (cards) => ({
  type: GET_CARDS_SUCCESS,
  payload: cards,
});
export const getCardsFailure = (error) => ({
  type: GET_CARDS_FAILURE,
  payload: error,
});
export const createCardRequest = () => ({
  type: CREATE_CARD_REQUEST,
});
export const createCardSuccess = (card) => ({
  type: CREATE_CARD_SUCCESS,
  payload: card,
});
export const createCardFailure = (error) => ({
  type: CREATE_CARD_FAILURE,
  payload: error,
});
export const deleteCardRequest = () => ({
  type: DELETE_CARD_REQUEST,
});
export const deleteCardSuccess = (id) => ({
  type: DELETE_CARD_SUCCESS,
  payload: id,
});
export const deleteCardFailure = (error) => ({
  type: DELETE_CARD_FAILURE,
  payload: error,
});
export const editCardRequest = () => ({
  type: EDIT_CARD_REQUEST,
});
export const editCardSuccess = (card) => ({
  type: EDIT_CARD_SUCCESS,
  payload: card,
});
export const editCardFailure = (error) => ({
  type: EDIT_CARD_FAILURE,
  payload: error,
});

export const getCards = () => {
  return (dispatch) => {
    dispatch(getCardsRequest());
    axios
      .get(process.env.REACT_APP_BASE_API_URL + "/cards")
      .then((response) => {
        const cards = response.data;
        dispatch(getCardsSuccess(cards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCardsFailure(errorMsg));
      });
  };
};
export const createCard = (bucketId, name, link) => {
  return (dispatch) => {
    dispatch(createCardRequest());
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "/cards", { bucketId, name, link })
      .then((response) => {
        const card = response.data;
        dispatch(createCardSuccess(card));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createCardFailure(errorMsg));
      });
  };
};
export const deleteCard = (id) => {
  return (dispatch) => {
    dispatch(deleteCardRequest());
    axios
      .delete(`${process.env.REACT_APP_BASE_API_URL}/cards/${id}`)
      .then((response) => {
        dispatch(deleteCardSuccess(id));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteCardFailure(errorMsg));
      });
  };
};
export const editCard = (bucketId, id) => {
  return (dispatch) => {
    dispatch(editCardRequest());
    axios
      .patch(`${process.env.REACT_APP_BASE_API_URL}/cards/${id}`, { bucketId, id })
      .then((response) => {
        const card = response.data;
        dispatch(editCardSuccess(card));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(editCardFailure(errorMsg));
      });
  };
};
