import { createSlice } from "@reduxjs/toolkit";

const searchparamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchparamsSlice.actions;
export default searchparamsSlice.reducer;
