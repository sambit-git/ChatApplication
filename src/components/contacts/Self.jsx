import { useSelector } from "react-redux";
import cls from "./Self.module.css";

const Self = () => {
  const username = useSelector((state) => state.user.username);
  const photo = useSelector((state) => state.user.photo);
  return (
    <div className={cls.contact}>
      <div className={cls.photo}>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${photo}`}
          alt={username}
        />
      </div>
      <div className={cls.body}>
        <input type="search" placeholder="Search or start a new chat" />
      </div>
    </div>
  );
};

export default Self;
