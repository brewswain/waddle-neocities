"use client";

import React from "react";
import TagSelectionProvider from "../../components/Tags/TagSelectionProvider";

export default function DevBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TagSelectionProvider>{children}</TagSelectionProvider>
    </section>
  );
}
