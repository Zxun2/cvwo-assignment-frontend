import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import request from "../api";
import { API_URL } from "../utils/constants";
import { Todo, APITodoRequestType } from "../types";

interface TodoState {
  Todo: Todo[];
}

// GET /todos
export const fetchAllTodos = createAsyncThunk(
  "Todo/fetchAllTodos",
  async (body: APITodoRequestType, _) => {
    const { token } = body;

    return request(
      "GET",
      { headers: { Authorization: `Bearer ${token}` } },
      "There was an error fetching your groups. Please reload.",
      `${API_URL}/todos`
    );
  }
);

// POST /todos
export const postTodo = createAsyncThunk(
  "Todo/createTodo",
  async (body: APITodoRequestType, _) => {
    const { token, content } = body;

    return request(
      "POST",
      { headers: { Authorization: `Bearer ${token}` }, content },
      "There was an error creating the group. Please reload.",
      `${API_URL}/todos`
    );
  }
);

// PUT /todos/:id
export const updateCurrTodo = createAsyncThunk(
  "Todo/updateTodo",
  async (body: APITodoRequestType, _) => {
    const { token, id, content } = body;

    return request(
      "PUT",
      { headers: { Authorization: `Bearer ${token}` }, content },
      "There was an error updating the group's title. Please reload.",
      `${API_URL}/todos/${id}`
    );
  }
);

// DELETE /todos/:id
export const deleteCurrTodo = createAsyncThunk(
  "Todo/deleteTodo",
  async (body: APITodoRequestType, _) => {
    const { token, id } = body;

    return request(
      "DELETE",
      { headers: { Authorization: `Bearer ${token}` } },
      "There was an error deleting the group.",
      `${API_URL}/todos/${id}`
    );
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    Todo: [],
  } as TodoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
        const { todos } = payload;
        state.Todo = todos;
      })
      .addCase(postTodo.fulfilled, (state, { payload }) => {
        const { todo } = payload;
        state.Todo.push(todo);
      })
      .addCase(deleteCurrTodo.fulfilled, (state, { payload }) => {
        const { todo } = payload;
        state.Todo = state.Todo.filter((obj) => obj.id !== todo.id);
      })
      .addCase(updateCurrTodo.fulfilled, (state, { payload }) => {
        console.log(payload, "FROM SLICE");

        const { todo } = payload;
        const objIndex = state.Todo.findIndex((obj) => obj.id === todo.id);
        state.Todo[objIndex] = todo;
      });
  },
});

export const getAllTodo = (state: RootState) => state.todo.Todo;

export const todoAction = todoSlice.actions;
export default todoSlice;
