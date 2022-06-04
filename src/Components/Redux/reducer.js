import { EDIT_DATA, DELETE_DATA, FETCH_DATA } from "./action";
import { store } from "./store";

let init_state = {
  filter: [],
  data: [],
};

export const data_reducer = (store = init_state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...store, data: payload };

    case EDIT_DATA:
      return store;

    case DELETE_DATA:
      const deletedData = store.data.filter((e) => {
        return e.id !== payload.id;
      });
      return { ...store, data: deletedData };

    default:
      return store;
  }
};
