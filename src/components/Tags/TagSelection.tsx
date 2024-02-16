"use client";

import { TagContext } from "@/context/TagsContext";
import React, { useContext } from "react";
import TagsDropdown from "./TagsDropdown";

const TagSelection = () => {
  const { setSelectedTags, inclusionMode, setInclusionMode } =
    useContext(TagContext);

  const handleInclusionModeChange = () => {
    inclusionMode === "&&" ? setInclusionMode("||") : setInclusionMode("&&");
  };

  const humanReadableInclusionMode = inclusionMode === "&&" ? "AND" : "OR";

  return (
    <section className="flex flex-col gap-4 p-4">
      <div>
        Multiple Tag Mode:
        <button
          type="button"
          className="bg-violet-500 p-2 rounded cursor-pointer ml-4 text-slate-100 min-w-[50px] hover:bg-violet-400 hover:test-slate-200 transition"
          onClick={handleInclusionModeChange}
          onKeyDown={handleInclusionModeChange}
        >
          {humanReadableInclusionMode}
        </button>
      </div>
      <TagsDropdown />
      <button
        type="button"
        className="bg-red-500 p-2 rounded cursor-pointer w-[80px] text-red-50 hover:bg-red-600 hover:text-slate-100 transition"
        onClick={() => setSelectedTags([])}
        onKeyDown={() => setSelectedTags([])}
      >
        Reset
      </button>
    </section>
  );
};

export default TagSelection;
