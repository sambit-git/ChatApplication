import cls from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <div className={cls["msg-input"]}>
      <div className={cls["input-group"]}>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type a message"
        />
        <button type="button">Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
