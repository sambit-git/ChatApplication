import { useEffect } from "react";
import { loadChats } from "../../services/chat.services";
import ContactBanner from "./ContactBanner";

import cls from "./ContactsPanel.module.css";
import Self from "./Self";
import { useSelector } from "react-redux";

const ContactsPanel = () => {
  const chats = useSelector((state) => state.chat.chats);

  useEffect(() => {
    loadChats();
  }, []);

  return (
    <div className={cls["left-panel"]}>
      <Self />
      <div className={cls["contacts-list"]}>
        {chats.map((chat) => {
          return <ContactBanner key={chat._id} {...chat} />;
        })}
      </div>
    </div>
  );
};

export default ContactsPanel;
