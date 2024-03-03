import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    selectedChat: undefined,
  },
  reducers: {
    updateChats: (state, action) => {
      state.chats = [...action.payload];
      state.selectedChat = action.payload[0];
    },
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

const chatActions = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
export default chatActions;
