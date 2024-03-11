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
    <li className="checklist__item flex cursor-pointer items-center gap-5 px-4 py-2 hover:bg-indigo-200">
      <span
        className={`${checked ? "text-slate-600 line-through" : null} text-lg`}
      >
        {children}
      </span>
    </li>
  );
};

export default ChecklistItem;
