import MyFriendBadge from "../FriendBadges/MyFriendBadge";

const ButtonContainer = () => {
  return (
    <article className="flex flex-col bg-slate-100 w-dvw p-4 items-center text-lg font-semibold">
      {"My one(1) button >:)"}
      <MyFriendBadge />
    </article>
  );
};

export default ButtonContainer;
