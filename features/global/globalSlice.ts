import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GlobalState {
  darkMode: boolean;
}

// Define the initial state using that type
const initialState: GlobalState = {
  darkMode: false,
};

const globalSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
