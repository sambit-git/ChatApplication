import cls from "./Conversations.module.css";
import Message from "./Message";
import { useEffect, useState } from "react";
import { loadMessages } from "../../services/message.services";
import { useSelector } from "react-redux";

const Conversations = ({ chatId }) => {
  const messages = useSelector((state) => state.message.messages);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadMessages(chatId).then((res) => setIsLoading(false));
  }, [chatId]);

  return (
    <div className={cls.conversations}>
      {isLoading
        ? "Loading"
        : messages.map((msg) => <Message key={msg._id} {...msg} />)}
    </div>
  );
};

export default Conversations;
