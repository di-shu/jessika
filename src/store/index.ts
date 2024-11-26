import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import testSlice from "./testSlice";

export const store = configureStore({
  reducer: { test: testSlice, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
