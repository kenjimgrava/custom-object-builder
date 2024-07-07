import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";

export const store = configureStore({
  reducer: {
    formData: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
