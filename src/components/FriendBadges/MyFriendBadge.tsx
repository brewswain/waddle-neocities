"use client";

import { CopyBlock, dracula } from "react-code-blocks";

import FriendBadge from "./FriendBadge";

const MyFriendBadge = () => {
  const temporaryBadgeData = {
    blogUrl: "https://waddle.neocities.org",
    imageUrl: "https://i.imgur.com/BwkY6WR.png",
    blogName: "blee",
  };

  const codeSnippet = ` <a href="https://waddle.neocities.org" target="_blank" rel="noreferrer">
  <img src="https://i.imgur.com/BwkY6WR.png" alt="A button that links to blee's neocities blog" />
  </a>`;

  return (
    <div className="friend-badge__container m-4 flex flex-col gap-1 justify-center items-center">
      <FriendBadge
        key={crypto.randomUUID()}
        blogUrl={temporaryBadgeData.blogUrl}
        blogName={temporaryBadgeData.blogName}
        imagueUrl={temporaryBadgeData.imageUrl}
      />

      <div className="codeblock__container max-w-[30ch] mt-1">
        {" "}
        <CopyBlock
          text={codeSnippet}
          language="html"
          showLineNumbers={true}
          theme={dracula}
          codeBlock
        />
      </div>
    </div>
  );
};

export default MyFriendBadge;
