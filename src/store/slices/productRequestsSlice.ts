import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";
import { Request } from "../../types";
import { createProductRequest } from "../../utils/helpers/create-product-request";
import { editProductRequest } from "../../utils/helpers/edit-product-request";

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
    request: (state, action) => {
      const { data } = action.payload;
      const newProductRequest = createProductRequest(data);
      state.value = [...state.value, newProductRequest];
    },
    deleteRequest: (state, action) => {
      const updatedState = state.value.filter((request) => {
        return request.id != action.payload;
      });
      state.value = updatedState;
    },
    edit: (state, action) => {
      const data = action.payload;

      const chosenRequest = state.value.find((request) => {
        return request.id == data.id;
      });
      if (chosenRequest) {
        const updatedRequest = editProductRequest(data, chosenRequest);
        const updatedState = state.value.map((request) => {
          if (request.id == chosenRequest.id) {
            return updatedRequest;
          } else return request;
        });
        state.value = updatedState;
      }
    },
  },
});

export const { vote, comment, reply, sort, request, deleteRequest, edit } =
  productRequestsSlice.actions;
export default productRequestsSlice.reducer;
