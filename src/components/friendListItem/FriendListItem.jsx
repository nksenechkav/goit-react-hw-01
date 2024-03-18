import clsx from "clsx";
import css from "./FriendListItem.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.username}>{name}</p>
      <p className={clsx(css["user-status"], isOnline && css["is-online"])}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;