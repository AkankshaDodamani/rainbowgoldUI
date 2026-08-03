import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./middleware/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // You can add productSlice or brandSlice here later
  },
});