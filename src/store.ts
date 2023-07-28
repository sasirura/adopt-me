import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import SearchParamsSlice from "./SearchParamsSlice";
import { petApi } from "./petAPIService";

const store = configureStore({
  reducer: {
    adoptedPetSlice,
    SearchParamsSlice,
    [petApi.reducerPath]:  petApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(petApi.middleware)
});

export default store;
