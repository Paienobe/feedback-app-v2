import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

export const productRequestsSlice = createSlice({
  name: "product-requests",
  initialState: { value: data.productRequests },
  reducers: {
    vote: (state, action) => {
      const { id, isUpvote } = action.payload;
      const request = state.value.find((item) => {
        return item.id === id;
      });

      if (request) {
        isUpvote ? request.upvotes++ : request.upvotes--;
        const updatedState = state.value.map((item) => {
          if (item.id === action.payload) {
            return request;
          } else return item;
        });
        state.value = updatedState;
      }
    },
    filter: (state, action) => {
      const filteredRequests = data.productRequests.filter((request) => {
        return request.category.toLowerCase() === action.payload.toLowerCase();
      });
      state.value = filteredRequests;

      if (action.payload.toLowerCase() === "all") {
        state.value = data.productRequests;
      }
    },
  },
});

export const { vote, filter } = productRequestsSlice.actions;
export default productRequestsSlice.reducer;
