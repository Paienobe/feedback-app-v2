import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";
import { Request } from "../../types";

export const productRequestsSlice = createSlice({
  name: "product-requests",
  initialState: { value: data.productRequests as Request[] },
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
    comment: (state, action) => {
      const { requestId, comment } = action.payload;

      let request = state.value.find((request) => {
        return request.id == requestId;
      });

      if (request) {
        request = { ...request, comments: [...request.comments, comment] };

        const updatedState = state.value.map((productRequest) => {
          if (productRequest.id == requestId) {
            return request!;
          } else return productRequest;
        });

        state.value = updatedState;
      }
    },
    reply: (state, action) => {
      const { requestId, commentId, reply } = action.payload;
      let request = state.value.find((request) => {
        return request.id == requestId;
      });

      if (request) {
        const comment = request.comments.find((comment) => {
          return comment.id == commentId;
        });

        if (comment) {
          if (comment.replies) {
            comment.replies?.push(reply);
          } else {
            comment.replies = [reply];
          }

          request = {
            ...request,
            comments: request.comments.map((item) => {
              if (item.id == commentId) {
                return comment;
              } else return item;
            }),
          };

          const updatedState = state.value.map((item) => {
            if (item.id == requestId) {
              return request!;
            } else return item;
          });

          state.value = updatedState;
        }
      }
    },
    sort: (state, action) => {
      const { sortBy } = action.payload;
      const least = state.value.sort((request1, request2) => {
        const sortOptions: { [x: string]: number } = {
          "Least Upvotes": request1.upvotes - request2.upvotes,
          "Most Upvotes": request2.upvotes - request1.upvotes,
          "Most Comments": request2.comments.length - request1.comments.length,
          "Least Comments": request1.comments.length - request2.comments.length,
        };
        return sortOptions[sortBy];
      });
      state.value = least;
    },
  },
});

export const { vote, filter, comment, reply, sort } =
  productRequestsSlice.actions;
export default productRequestsSlice.reducer;
