import cls from "./Conversations.module.css";
import Message from "./Message";
import { useEffect } from "react";
import { loadMessages } from "../../services/message.services";
import { useSelector } from "react-redux";

const Conversations = ({ chatId }) => {
  const messages = useSelector((state) => state.message.messages);
  useEffect(() => {
    loadMessages(chatId);
  }, [chatId]);

  return (
    <div className={cls.conversations}>
      {messages.map((msg) => (
        <Message key={msg._id} {...msg} />
      ))}
    </div>
  );
};

export default Conversations;
