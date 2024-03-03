import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    updateMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

const messageActions = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
export default messageActions;
