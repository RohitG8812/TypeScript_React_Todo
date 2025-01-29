import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  task: string;
  id: string;
  isDone: boolean;
  date: Date;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.unshift({
        id: (Math.random() * 11).toString(),
        task: action.payload,
        isDone: false,
        date: new Date(),
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodo: () => {
      localStorage.removeItem("todos");
      return [];
    },
    loadTodos: (_state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteAllTodo, deleteTodo, loadTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
