import css from "./Profile.module.scss";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["profile-card-container"]}>
      <div className={css["user-card"]}>
        <img className={css["user-image"]} src={image} alt="User avatar" width="250" />
        <p className={css["user-card-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["profile-info"]}>
        <li className={css["profile-info-item"]}>
          <span className={css["profile-info-name"]}>Followers</span>
          <span className={css["profile-info-amount"]}>{stats.followers}</span>
        </li>
        <li className={css["profile-info-item"]}>
          <span className={css["profile-info-name"]}>Views</span>
          <span className={css["profile-info-amount"]}>{stats.views}</span>
        </li>
        <li className={css["profile-info-item"]}>
          <span className={css["profile-info-name"]}>Likes</span>
          <span className={css["profile-info-amount"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;