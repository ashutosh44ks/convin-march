import { CREATE_CARD, EDIT_CARD, DELETE_CARD } from "./CardTypes";

const initialState = {
  cards: [
    {
      bucketId: "bucket-A",
      name: "Card 1",
      link: "//www.youtube.com/embed/UAnPpEfhn_s?autoplay=1&mute=1",
      cardId: "card-1",
    },
  ],
};
const cardReducer = (state = initialState, action) => {
  const { cardId } = action.payload || {};

  switch (action.type) {
    case CREATE_CARD: {
      const cardData = action.payload;
      return {
        ...state,
        cards: [...state.cards, cardData],
      };
    }

    case DELETE_CARD: {
      const newCards = state.cards.filter((card) => card.cardId !== cardId);
      return {
        ...state,
        cards: [...newCards],
      };
    }

    case EDIT_CARD: {
      const { bucketId, cardId } = action.payload;
      const newCards = state.cards.map((card) => {
        if (card.cardId === cardId) {
          return {
            ...card,
            bucketId: bucketId,
          };
        }
        return card;
      });
      return {
        ...state,
        cards: newCards,
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
