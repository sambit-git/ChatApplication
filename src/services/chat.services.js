import chatActions from "../redux-store/chat.slice";
import store from "../redux-store/store";
import api from "./api.services";

export const loadChats = async () => {
  try {
    const response = await api.get("/chats/");

    // update redux-store
    store.dispatch(chatActions.updateChats(response.data));

    // console.log(response.data);
    return response.data;
  } catch (error) {
    return error?.response?.data?.message || "Bad Request";
  }
};
