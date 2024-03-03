import cls from "./Conversations.module.css";
import Message from "./Message";
import { useEffect } from "react";
import { loadMessages } from "../../services/message.services";
import { useSelector } from "react-redux";

const Conversations = ({ chat }) => {
  const messages = useSelector((state) => state.message.messages);
  useEffect(() => {
    loadMessages(chat._id);
  }, [chat]);

  return (
    <div className={cls.conversations}>
      {messages.map((msg) => (
        <Message key={msg._id} {...msg} />
      ))}
    </div>
  );
};

export default Conversations;
