import { useSelector } from "react-redux";
import cls from "./ChatThread.module.css";
import { chatDetails } from "../../utilities/general.utility";

const ChatThread = ({ chat }) => {
  const userId = useSelector((state) => state.user.userId);
  const { chatName, photo } = chatDetails(chat, userId);

  return (
    <div className={cls.contact}>
      <div className={cls.photo}>
        <img src={photo} alt={chatName} />
      </div>
      <div className={cls.body}>
        <p className={cls.name}>{chatName || "Loading ..."}</p>
      </div>
    </div>
  );
};

export default ChatThread;
