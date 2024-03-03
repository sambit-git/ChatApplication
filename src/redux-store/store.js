import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user.slice";
import { chatReducer } from "./chat.slice";
import { messageReducer } from "./message.slice";

const store = configureStore({
  reducer: { user: userReducer, chat: chatReducer, message: messageReducer },
});

export default store;
