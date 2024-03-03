import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    fetchMessages: (state, action) => {
      state.messages = [...action.payload];
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const messageActions = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
export default messageActions;
