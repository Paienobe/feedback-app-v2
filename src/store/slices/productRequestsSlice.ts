import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

export const productRequestsSlice = createSlice({
  name: "product-requests",
  initialState: { value: data.productRequests },
  reducers: {},
});

export default productRequestsSlice.reducer;
