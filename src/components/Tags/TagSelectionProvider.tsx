import React from "react";

import TagSelection from "./TagSelection";

const TagSelectionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TagSelection />
      <div>{children}</div>
    </main>
  );
};

export default TagSelectionProvider;
