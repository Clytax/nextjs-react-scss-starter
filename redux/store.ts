import { configureStore } from "@reduxjs/toolkit";
// Reducers
import globalReducer from "@/features/global/globalSlice";
export const store = configureStore({
  reducer: {
    // Add reducers here
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
