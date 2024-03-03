import { useSelector } from "react-redux";
import cls from "./ChatsPanel.module.css";
import ChatThread from "./ChatThread";
import Conversations from "./Conversations";
import MessageInput from "./MessageInput";

const ChatPanel = () => {
  const chat = useSelector((state) => state.chat.selectedChat);
  return (
    <div className={cls["chat-panel"]}>
      {chat ? (
        <>
          <ChatThread chat={chat} />
          <Conversations chatId={chat._id} />
          <MessageInput chatId={chat._id} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ChatPanel;
