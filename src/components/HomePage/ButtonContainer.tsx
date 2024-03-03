import MyFriendBadge from "../FriendBadges/MyFriendBadge";

import "./HomePage.styles.scss";

const ButtonContainer = () => {
  return (
    <aside
      className={
        "homepage-card flex flex-col items-center bg-slate-100 text-lg font-semibold sm:h-full sm:max-w-[330px]"
      }
    >
      <h1 className="homepage-card__header homepage-card__button-container homepage-card__button-container__gradient w-full p-2 font-merriweather">
        {"Button"}
      </h1>
      <MyFriendBadge />
    </aside>
  );
};

export default ButtonContainer;
