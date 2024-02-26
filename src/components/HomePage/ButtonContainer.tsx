import MyFriendBadge from "../FriendBadges/MyFriendBadge";

const ButtonContainer = () => {
  return (
    <aside
      className={
        "flex flex-col items-center bg-slate-100 p-4 text-lg font-semibold sm:h-full sm:max-w-[330px] md:max-w-[340px]"
      }
    >
      {"My one(1) button >:)"}
      <MyFriendBadge />
    </aside>
  );
};

export default ButtonContainer;
