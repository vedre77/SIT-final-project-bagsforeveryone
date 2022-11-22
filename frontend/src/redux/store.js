import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/Auth";

// const initialState = {
//   value: false,
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})