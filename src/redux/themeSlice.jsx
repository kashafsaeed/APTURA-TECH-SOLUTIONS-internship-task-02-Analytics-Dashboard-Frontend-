import { createSlice } from "@reduxjs/toolkit";

const savedTheme =
  JSON.parse(localStorage.getItem("darkMode")) || false;

if (savedTheme) {
  document.documentElement.classList.add("dark");
}

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    darkMode: savedTheme,
  },

  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      localStorage.setItem(
        "darkMode",
        JSON.stringify(state.darkMode)
      );

      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;