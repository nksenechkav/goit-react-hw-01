import css from "./Profile.module.scss";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["profile-container"]}>
      <div className={css["user-info"]}>
        <img src={image} alt="User avatar" width="250" />
        <p className={css["user-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["profile-stats"]}>
        <li>
          <span className={css["profile-stats-descr"]}>Followers</span>
          <span className={css["profile-stats-number"]}>{stats.followers}</span>
        </li>
        <li>
          <span className={css["profile-stats-descr"]}>Views</span>
          <span className={css["profile-stats-number"]}>{stats.views}</span>
        </li>
        <li>
          <span className={css["profile-stats-descr"]}>Likes</span>
          <span className={css["profile-stats-number"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;