import { legacy_createStore as createStore } from "redux";

import { data_reducer } from "./reducer";

export const store = createStore(data_reducer);
