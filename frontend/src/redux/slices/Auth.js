import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerEmail: undefined,
    currentUser: undefined,
    accessToken: null,
    refreshToken: null,
    isInputValid: true
  },
  reducers: {
    setRegisterEmail: (state, action) => {
      state.registerEmail = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload
    },
    setIsInputValid: (state, action) => {
      state.isInputValid = action.payload
    }
  }
})

export const selectIsInputValid = state => state.auth.isInputValid

export const { setRegisterEmail, setCurrentUser, setAccessToken, setRefreshToken, setIsInputValid } = authSlice.actions;
export default authSlice.reducer;