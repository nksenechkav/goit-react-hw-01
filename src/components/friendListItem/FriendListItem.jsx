import clsx from "clsx";
import css from "./FriendListItem.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css["friend-list-item"]}>
      <img className={css["friend-image"]} src={avatar} alt="Avatar" width="48" />
      <p className={css["friend-name"]}>{name}</p>
      <p className={clsx(css["friend-status"], isOnline && css["is-online"])}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;