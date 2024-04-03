"use client";

import  {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface TagContextInterface {
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  inclusionMode: string;
  setInclusionMode: Dispatch<SetStateAction<string>>;
}
export const TagContext = createContext<TagContextInterface>({
  selectedTags: [],
  setSelectedTags: () => {},
  inclusionMode: "&&",
  setInclusionMode: () => {},
});

const TagProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [inclusionMode, setInclusionMode] = useState<string>("&&");

  return (
    <TagContext.Provider
      value={{ selectedTags, setSelectedTags, inclusionMode, setInclusionMode }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagProvider;
