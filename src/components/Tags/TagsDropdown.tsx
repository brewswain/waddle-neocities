import { tagsList } from "@/app/consts/tags";
import TagCard from "./TagCard";

const TagsDropdown = () => {
  return (
    <div className="w-full flex flex-wrap gap-4">
      {tagsList.map((tag) => (
        <TagCard key={crypto.randomUUID()} tag={tag} dropdown />
      ))}
    </div>
  );
};

export default TagsDropdown;
