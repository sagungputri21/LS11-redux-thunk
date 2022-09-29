import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import SpinAnimation from "../../components/LoadingSpin";

const URL = "https://jsonplaceholder.typicode.com/users/1/todos";

const initialState = {
  entities: [],
  isLoading: false,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get(URL);
  return response.data;
});

const isLoading = () => {
  return (
    <SpinAnimation />
  )
}

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
      isLoading();
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
      // state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
      alert("Failed to get data...");
    });
  },
});

export default TodosSlice.reducer;
