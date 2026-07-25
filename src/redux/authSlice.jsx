import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

const initialState = {
  user: savedUser || null,
  isAuthenticated: isLoggedIn || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },

    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },

    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      localStorage.setItem("user", JSON.stringify(state.user));
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { signup, login, updateProfile, logout } = authSlice.actions;

export default authSlice.reducer;