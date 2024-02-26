import { DATA } from "../../../data";
import ContactBanner from "./ContactBanner";

import cls from "./ContactsPanel.module.css";
import Self from "./Self";

const ContactsPanel = () => {
  return (
    <div className={cls["left-panel"]}>
      <Self {...DATA.self} />
      <div className={cls["contacts-list"]}>
        {DATA.users.map((user) => (
          <ContactBanner key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default ContactsPanel;
