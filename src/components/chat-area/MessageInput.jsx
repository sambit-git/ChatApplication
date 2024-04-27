import { useEffect, useRef, useState } from "react";
import cls from "./MessageInput.module.css";
import { sendMessage } from "../../services/message.services";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

let socket;

const MessageInput = ({ chatId, username, onStartTyping, onStopTyping }) => {
  const msgInput = useRef();
  const timerRef = useRef();
  const [socketConnected, setSocketConnected] = useState(false);
  // const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("setup", username);
    socket.on("connection", () => setSocketConnected(true));
    socket.emit("join-chat", chatId);
  }, [chatId]);

  const handleSendMessage = () => {
    sendMessage(chatId, msgInput.current.value);
    msgInput.current.value = "";
    socket.emit("new-message", { chatId, username });
    socket.emit("typing-stopped");
  };

  useEffect(() => {
    socket.on("typing", (username) => onStartTyping(username));
    socket.on("typing-stopped", () => onStopTyping());
  }, []);

  const handleTyping = (event) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    socket.emit("typing", { chatId, username });

    timerRef.current = setTimeout(() => {
      socket.emit("typing-stopped", chatId);
    }, [1000]);
  };

  return (
    <div className={cls["msg-input"]}>
      <div className={cls["input-group"]}>
        <input
          type="text"
          name="message"
          id="message"
          ref={msgInput}
          placeholder="Type a message"
          onKeyDown={handleTyping}
        />
        <button type="button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
