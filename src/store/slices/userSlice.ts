import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: data.currentUser },
  reducers: {},
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
