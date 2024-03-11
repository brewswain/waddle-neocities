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
    <section className="flex flex-col gap-4 bg-white p-4">
      <div>
        Multiple Tag Mode:
        <button
          type="button"
          className="hover:test-slate-200 ml-4 min-w-[50px] cursor-pointer rounded bg-violet-500 p-2 text-slate-100 transition hover:bg-violet-400"
          onClick={handleInclusionModeChange}
          onKeyDown={handleInclusionModeChange}
        >
          {humanReadableInclusionMode}
        </button>
      </div>
      <TagsDropdown />
      <button
        type="button"
        className="w-[80px] cursor-pointer rounded bg-red-500 p-2 text-red-50 transition hover:bg-red-600 hover:text-slate-100"
        onClick={() => setSelectedTags([])}
        onKeyDown={() => setSelectedTags([])}
      >
        Reset
      </button>
    </section>
  );
};

export default TagSelection;
