import { ADD_ITEM } from "./HistoryTypes";

const initialState = {
  history: [],
};
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemData = action.payload;
      return {
        ...state,
        history: [...state.history, itemData],
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
