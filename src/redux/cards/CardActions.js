import { CREATE_CARD, EDIT_CARD, DELETE_CARD } from "./CardTypes";

// Action Creators
export const createCard = (bucketId, name, link, cardId) => ({
  type: CREATE_CARD,
  payload: { bucketId, name, link, cardId },
});

export const deleteCard = (cardId) => ({
  type: DELETE_CARD,
  payload: { cardId },
});

export const editCard = (bucketId, cardId, updatedCardData) => ({
  type: EDIT_CARD,
  payload: { bucketId, cardId, updatedCardData },
});
