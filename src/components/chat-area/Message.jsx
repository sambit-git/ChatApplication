import { formatTime, photoUrl } from "../../utilities/general.utility";
import cls from "./Message.module.css";
import { useSelector } from "react-redux";

const Message = ({ sender, content, updatedAt }) => {
  const userId = useSelector((state) => state.user.userId);

  let msgAlignClass;
  if (userId === sender._id) msgAlignClass = "right";
  else msgAlignClass = "left";

  return (
    <div className={`${cls["message-item"]} ${cls[msgAlignClass]}`}>
      {/* <div className={cls.photo}>
        <img src={photoUrl(sender.photo)} alt={sender.fullName} />
      </div> */}
      <div className={cls.msg}>
        <p>{content}</p>
        <p className={cls.timestamp}>{formatTime(updatedAt, true)}</p>
      </div>
    </div>
  );
};

export default Message;
