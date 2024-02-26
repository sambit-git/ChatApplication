import cls from "./Self.module.css";

const Self = ({ photo, name }) => {
  return (
    <div className={cls.contact}>
      <div className={cls.photo}>
        <img src={photo} alt={name} />
      </div>
      <div className={cls.body}>
        <input type="search" placeholder="Search or start a new chat" />
      </div>
    </div>
  );
};

export default Self;
