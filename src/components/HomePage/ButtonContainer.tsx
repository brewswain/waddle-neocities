import MyFriendBadge from "../FriendBadges/MyFriendBadge";

const ButtonContainer = () => {
  const positionVariants = {
    rowStart: "sm:row-start-2",
    rowEnd: "sm:row-end-3 md:row-end-4",
    columnStart: "sm:col-start-1 md:col-start-",
    columnEnd: "sm:col-end-3",
  };

  return (
    <aside
      className={`flex flex-col bg-slate-100 w-dvw p-4 items-center text-lg font-semibold sm:max-w-[285px] md:max-w-[340px] sm:h-full justify-self-end  ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
    >
      {"My one(1) button >:)"}
      <MyFriendBadge />
    </aside>
  );
};

export default ButtonContainer;
