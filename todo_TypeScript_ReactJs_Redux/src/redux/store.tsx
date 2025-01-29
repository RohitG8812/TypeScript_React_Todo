import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../redux/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: TodoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
