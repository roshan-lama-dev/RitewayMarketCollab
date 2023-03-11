import { configureStore } from "@reduxjs/toolkit";
import nameReducers from "./nameslice";
const store = configureStore({
  reducer: {
    nameListReducer: nameReducers,
  },
});

export default store;
