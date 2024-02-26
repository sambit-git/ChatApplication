import cls from "./ChatThread.module.css";

const ChatThread = ({ photo, name }) => {
  return (
    <div className={cls.contact}>
      <div className={cls.photo}>
        <img src={photo} alt={name} />
      </div>
      <div className={cls.body}>
        <p className={cls.name}>{name}</p>
      </div>
    </div>
  );
};

export default ChatThread;
