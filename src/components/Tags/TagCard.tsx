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
      | React.KeyboardEvent<HTMLSpanElement>
  ) => {
    event.preventDefault();

    const input = event.target as HTMLElement;
    const formattedTag = input.textContent
      ? dropdown
        ? input.textContent
        : input.textContent.substring(1)
      : "No text detected";

    const filteredTags = selectedTags.filter((chosenTag) => chosenTag !== tag);

    // TODO: edit this for when we change our structure to have an array of strings; we can then use a filter method
    selectedTags.includes(formattedTag)
      ? setSelectedTags(filteredTags)
      : setSelectedTags([...selectedTags, formattedTag]);
  };
  return (
    <span
      className={`text-sm  px-2 cursor-pointer
              z-[2] transition ${
                dropdown
                  ? `rounded p-1 text-slate-100 ${
                      selectedTags.includes(tag)
                        ? " hover:bg-green-400  bg-green-500 text-slate-50"
                        : " hover:bg-slate-600 bg-slate-700 hover:text-slate-100 "
                    }`
                  : "rounded-2xl text-slate-300  bg-slate-700"
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
