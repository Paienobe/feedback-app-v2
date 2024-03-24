import { configureStore } from "@reduxjs/toolkit";
import productRequests from "./slices/productRequestsSlice";

const store = configureStore({
  reducer: { productRequests },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
