import { useSelector, useDispatch } from "react-redux";
import cls from "./ContactBanner.module.css";
import { chatDetails } from "../../utilities/general.utility";
import chatActions from "../../redux-store/chat.slice";

const ContactBanner = (props) => {
  const userId = useSelector((state) => state.user.userId);
  const chats = useSelector((state) => state.chat.chats);

  const dispatch = useDispatch();

  const { photo, latestMessage, chatName, time } = chatDetails(props, userId);

  const selectChatHandler = () => {
    dispatch(
      chatActions.selectChat(chats.find((chat) => chat._id == props._id))
    );
    // console.log(props._id);
  };

  return (
    <div className={cls.contact} onClick={selectChatHandler}>
      <div className={cls.photo}>
        <img src={photo} alt={chatName} />
      </div>
      <div className={cls.body}>
        <p className={cls.name}>{chatName}</p>
        {latestMessage && (
          <p className={cls.last_msg}>
            {latestMessage.length > 30
              ? `${latestMessage.slice(0, 30)}...`
              : latestMessage}
          </p>
        )}
      </div>
      {time && (
        <div className={cls.meta}>
          <p>{time}</p>
          {/* {count > 0 && <p className={cls.count}>{count}</p>} */}
        </div>
      )}
    </div>
  );
};

export default ContactBanner;
