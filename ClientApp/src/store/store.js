import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./brand-slice";

export const store = configureStore({
  reducer: {
    brand: brandReducer,
  },
});
