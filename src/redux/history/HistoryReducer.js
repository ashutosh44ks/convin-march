import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from "./HistoryTypes";

const initialState = {
  history: [],
};
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        loading: false,
        history: action.payload,
        error: "",
      };
    case GET_ITEMS_FAILURE:
      return {
        loading: false,
        history: [],
        error: action.payload,
      };
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        loading: false,
        history: [...state.history, action.payload],
        error: "",
      };
    case ADD_ITEM_FAILURE:
      return {
        loading: false,
        history: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
