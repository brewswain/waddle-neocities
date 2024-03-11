"use client";

import { TagContext } from "@/context/TagsContext";
import React, { useContext } from "react";

interface TagCardProps {
  tag: string;
  dropdown?: boolean;
}
const TagCard = ({ tag, dropdown }: TagCardProps) => {
  const { selectedTags, setSelectedTags } = useContext(TagContext);

  const handleClick = (
    event:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => {
    event.preventDefault();

    const input = event.target as HTMLElement;
    const formattedTag = input.textContent
      ? dropdown
        ? input.textContent
        : input.textContent.substring(1)
      : "No text detected";

    const filteredTags = selectedTags.filter((chosenTag) => chosenTag !== tag);

    selectedTags.includes(formattedTag)
      ? setSelectedTags(filteredTags)
      : setSelectedTags([...selectedTags, formattedTag]);
  };
  return (
    <span
      className={`z-[2]  cursor-pointer px-2
              text-sm transition ${
                dropdown
                  ? `rounded p-1 text-slate-100 ${
                      selectedTags.includes(tag)
                        ? " bg-green-500  text-slate-50 hover:bg-green-400"
                        : " bg-slate-700 hover:bg-slate-600 hover:text-slate-100 "
                    }`
                  : `rounded-2xl   ${
                      selectedTags.includes(tag)
                        ? "bg-green-500 text-slate-50"
                        : tag === "New!"
                          ? "bg-teal-500 text-slate-100"
                          : "bg-slate-700 text-slate-300 "
                    }`
              }`}
      key={crypto.randomUUID()}
      onClick={(event) => handleClick(event)}
      onKeyDown={(event) => handleClick(event)}
    >
      {dropdown ? null : "#"}
      {tag}
    </span>
  );
};

export default TagCard;
