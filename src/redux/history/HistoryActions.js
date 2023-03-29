import { ADD_ITEM } from "./HistoryTypes";

// Action Creators
export const addItem = (name, link) => ({
  type: ADD_ITEM,
  payload: {
    name,
    link,
    time: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
});
