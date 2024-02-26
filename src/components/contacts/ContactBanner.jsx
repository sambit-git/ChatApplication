import cls from "./ContactBanner.module.css";

const ContactBanner = ({ photo, name, last_msg, time, count }) => {
  //   console.log(last_msg.length, last_msg.slice(0, 50), last_msg);
  return (
    <div className={cls.contact}>
      <div className={cls.photo}>
        <img src={photo} alt={name} />
      </div>
      <div className={cls.body}>
        <p className={cls.name}>{name}</p>
        <p className={cls.last_msg}>
          {last_msg.length > 30 ? `${last_msg.slice(0, 30)}...` : last_msg}
        </p>
      </div>
      <div className={cls.meta}>
        <p>{time}</p>
        {count > 0 && <p className={cls.count}>{count}</p>}
      </div>
    </div>
  );
};

export default ContactBanner;
