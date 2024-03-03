import api from "./api.services";
import store from "../redux-store/store";
import messageActions from "../redux-store/message.slice";

export const loadMessages = async (chatId) => {
  try {
    const response = await api.get(`/messages/${chatId}`);
    // console.log(response);

    // update redux-store
    store.dispatch(messageActions.fetchMessages(response.data));

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Bad Request",
    };
  }
};

export const sendMessage = async (chatId, content) => {
  try {
    const response = await api.post("/messages/", { chatId, content });
    console.log(response.data);

    // update redux-store
    store.dispatch(messageActions.sendMessage(response.data));

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Bad Request",
    };
  }
};
