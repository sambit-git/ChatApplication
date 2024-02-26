import cls from "./Message.module.css";
import { DATA } from "../../../data";
// {sender, photo, type, msg}

const Message = ({ name, photo, msg, time }) => {
  let msgAlignClass;
  if (name === DATA.self.name) msgAlignClass = "right";
  else msgAlignClass = "left";
  return (
    <div className={`${cls["message-item"]} ${cls[msgAlignClass]}`}>
      {/* <div className={cls.photo}>
        <img src={photo} alt={name} />
      </div> */}
      <div className={cls.msg}>
        <p>{msg}</p>
        <p className={cls.timestamp}>{time}</p>
      </div>
    </div>
  );
};

export default Message;
