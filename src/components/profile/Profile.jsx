import css from "./Profile.module.scss";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["profile-container"]}>
      <div className={css["user-card"]}>
        <img className={css["user-image"]} src={image} alt="User avatar" width="250" />
        <p className={css["user-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["info"]}>
        <li className={css["info-item"]}>
          <span className={css["info-title"]}>Followers</span>
          <span className={css["info-amount"]}>{stats.followers}</span>
        </li>
        <li className={css["info-item"]}>
          <span className={css["info-title"]}>Views</span>
          <span className={css["info-amount"]}>{stats.views}</span>
        </li>
        <li className={css["info-item"]}>
          <span className={css["info-title"]}>Likes</span>
          <span className={css["info-amount"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;