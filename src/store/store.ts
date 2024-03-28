import { configureStore } from "@reduxjs/toolkit";
import productRequests from "./slices/productRequestsSlice";
import user from "./slices/userSlice";

const store = configureStore({
  reducer: { productRequests, user },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
