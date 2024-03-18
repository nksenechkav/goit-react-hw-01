import FriendListItem from "../friendListItem/FriendListItem";
import css from "./FriendList.module.scss";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;