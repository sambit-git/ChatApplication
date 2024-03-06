import { useEffect, useRef, useState } from "react";
import cls from "./MessageInput.module.css";
import { sendMessage } from "../../services/message.services";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

let socket;

const MessageInput = ({ chatId }) => {
  const msgInput = useRef();
  const [socketConnected, setSocketConnected] = useState(false);
  const userId = useSelector((state) => state.user.userId);

  const handleSendMessage = () => {
    sendMessage(chatId, msgInput.current.value);
    msgInput.current.value = "";
    // socket.emit();
  };

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("setup", userId);
    socket.on("connection", () => setSocketConnected(true));
    socket.emit("join-chat", chatId);
  }, [chatId]);
  return (
    <div className={cls["msg-input"]}>
      <div className={cls["input-group"]}>
        <input
          type="text"
          name="message"
          id="message"
          ref={msgInput}
          placeholder="Type a message"
        />
        <button type="button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
