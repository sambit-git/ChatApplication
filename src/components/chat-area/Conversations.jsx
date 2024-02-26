import cls from "./Conversations.module.css";
import Message from "./Message";
import { DATA } from "../../../data";

const Conversations = () => {
  return (
    <div className={cls.conversations}>
      {DATA.messages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default Conversations;
