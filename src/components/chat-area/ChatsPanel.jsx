import cls from "./ChatsPanel.module.css";
import { DATA } from "../../../data";
import ChatThread from "./ChatThread";
import Conversations from "./Conversations";
import MessageInput from "./MessageInput";
const ChatPanel = () => {
  const chatThread = DATA.users[2];
  return (
    <div className={cls["chat-panel"]}>
      <ChatThread {...chatThread} />
      <Conversations />
      <MessageInput />
    </div>
  );
};

export default ChatPanel;
