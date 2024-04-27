import { useSelector } from "react-redux";
import cls from "./ChatsPanel.module.css";
import ChatThread from "./ChatThread";
import Conversations from "./Conversations";
import MessageInput from "./MessageInput";
import { useState } from "react";

const ChatPanel = () => {
  const chat = useSelector((state) => state.chat.selectedChat);
  const username = useSelector((state) => state.user.username);
  const [isTyping, setIsTyping] = useState(false);
  const [whoTyping, setWhoTyping] = useState();

  const handleStartTyping = (usr) => {
    setWhoTyping(usr);
    setIsTyping(true);
  };
  const handleStopTyping = () => setIsTyping(false);

  return (
    <div className={cls["chat-panel"]}>
      {chat ? (
        <>
          <ChatThread
            chat={chat}
            username={username}
            typing={isTyping}
            whoTyping={whoTyping}
          />
          <Conversations chatId={chat._id} />
          <MessageInput
            chatId={chat._id}
            onStartTyping={handleStartTyping}
            onStopTyping={handleStopTyping}
            username={username}
          />
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ChatPanel;
