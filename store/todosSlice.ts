import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = { items: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      state.items.push({ id: action.payload.id, text: action.payload.text, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearTodos: state => {
      state.items = [];
    },
  },
});

export const { addTodo, toggleTodo, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;