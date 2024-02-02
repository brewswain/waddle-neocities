import { ReactNode } from "react";

const ChecklistItem = ({
  children,
  index,
  itemId,
  checked,
}: {
  children: ReactNode;
  index: number;
  itemId: number;
  checked: boolean;
}) => {
  return (
    <li className="checklist__item flex items-center gap-5 cursor-pointer hover:bg-indigo-200 px-4 py-2">
      <span
        className={`${checked ? "line-through text-slate-600" : null} text-lg`}
      >
        {children}
      </span>
    </li>
  );
};

export default ChecklistItem;
