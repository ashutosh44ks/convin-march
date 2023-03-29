import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD,
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

const initialState = {
  loading: false,
  cards: [
    {
      bucketId: "bucket-A",
      name: "Card 1",
      link: "//www.youtube.com/embed/UAnPpEfhn_s?autoplay=0&mute=1",
    },
  ],
  error: "",
};
const cardReducer = (state = initialState, action) => {
  // const { id } = action.payload || {};

  switch (action.type) {
    // case CREATE_CARD: {
    //   const cardData = action.payload;
    //   return {
    //     ...state,
    //     cards: [...state.cards, cardData],
    //   };
    // }
    // case DELETE_CARD: {
    //   const newCards = state.cards.filter((card) => card.id !== id);
    //   return {
    //     ...state,
    //     cards: [...newCards],
    //   };
    // }
    // case EDIT_CARD: {
    //   const { bucketId, id } = action.payload;
    //   const newCards = state.cards.map((card) => {
    //     if (card.id === id) {
    //       return {
    //         ...card,
    //         bucketId: bucketId,
    //       };
    //     }
    //     return card;
    //   });
    //   return {
    //     ...state,
    //     cards: newCards,
    //   };
    // }

    case GET_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CARDS_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
        error: "",
      };
    case GET_CARDS_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };
    case CREATE_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CARD_SUCCESS:
      return {
        loading: false,
        cards: [...state.cards, action.payload],
        error: "",
      };
    case CREATE_CARD_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };
    case DELETE_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CARD_SUCCESS:
      console.log(state.cards.filter((card) => card.id !== action.payload))
      return {
        loading: false,
        cards: state.cards.filter((card) => card.id !== action.payload),
        error: "",
      };
    case DELETE_CARD_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };
    case EDIT_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CARD_SUCCESS:
      return {
        loading: false,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              bucketId: action.payload.bucketId,
            };
          }
          return card;
        }),
        error: "",
      };
    case EDIT_CARD_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cardReducer;
