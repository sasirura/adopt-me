import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adopetedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
