import React from "react";
import TagCard from "./TagCard";

interface TagsContainerProps {
  tags: string[];
}

const TagsContainer = ({ tags }: TagsContainerProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-2 gap-y-1 px-1 py-2 pt-4">
      {tags && tags?.length > 0
        ? tags?.map((tag) => <TagCard key={crypto.randomUUID()} tag={tag} />)
        : null}
    </div>
  );
};

export default TagsContainer;
