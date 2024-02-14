import { LayoutProps } from "@/app/consts/interfaces";

import MyFriendBadge from "../FriendBadges/MyFriendBadge";

const ButtonContainer = ({
  rowStart,
  rowEnd,
  columnStart,
  columnEnd,
}: LayoutProps) => {
  return (
    <aside
      className="flex flex-col bg-slate-100 w-dvw p-4 items-center text-lg font-semibold sm:max-w-[340px] sm:h-full sm:justify-self-end"
      style={{
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd,
      }}
    >
      {"My one(1) button >:)"}
      <MyFriendBadge />
    </aside>
  );
};

export default ButtonContainer;
