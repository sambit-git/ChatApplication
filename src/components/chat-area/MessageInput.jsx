import { useRef } from "react";
import cls from "./MessageInput.module.css";
import { sendMessage } from "../../services/message.services";

const MessageInput = ({ chatId }) => {
  const msgInput = useRef();

  const handleSendMessage = () => {
    sendMessage(chatId, msgInput.current.value);
    msgInput.current.value = "";
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
        />
        <button type="button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
