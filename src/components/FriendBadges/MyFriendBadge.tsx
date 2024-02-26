"use client";

import { CopyBlock, dracula } from "react-code-blocks";

import FriendBadge from "./FriendBadge";

const MyFriendBadge = () => {
  const temporaryBadgeData = {
    blogUrl: "https://waddle.neocities.org",
    imageUrl: "https://i.imgur.com/BwkY6WR.png",
    blogName: "blee",
  };

  const codeSnippet = `<a href="https://waddle.neocities.org" target="_blank" rel="noreferrer">
    <img src="https://i.imgur.com/BwkY6WR.png" alt="A button that links to blee's neocities blog" />
</a>`;

  return (
    <article className="friend-badge__container m-4 flex flex-col items-center justify-center gap-1">
      <FriendBadge
        key={crypto.randomUUID()}
        blogUrl={temporaryBadgeData.blogUrl}
        blogName={temporaryBadgeData.blogName}
        imagueUrl={temporaryBadgeData.imageUrl}
      />

      <figure className="codeblock__container mt-1 max-w-[25ch] text-sm sm:max-w-[30ch] md:text-base ">
        <CopyBlock
          text={codeSnippet}
          language="html"
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
      </figure>
    </article>
  );
};

export default MyFriendBadge;
