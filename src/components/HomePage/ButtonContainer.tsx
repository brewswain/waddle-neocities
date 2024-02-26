import MyFriendBadge from "../FriendBadges/MyFriendBadge";

const ButtonContainer = () => {
  const positionVariants = {
    rowStart: "sm:row-start-3",
    rowEnd: "sm:row-end-4 md:row-end-4",
    columnStart: "sm:col-start-2 md:col-start-2",
    columnEnd: "sm:col-end-7",
  };

  return (
    <aside
      className={`flex flex-col items-center bg-slate-100 p-4 text-lg font-semibold sm:h-full sm:max-w-[330px] md:max-w-[340px]  ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
    >
      {"My one(1) button >:)"}
      <MyFriendBadge />
    </aside>
  );
};

export default ButtonContainer;
