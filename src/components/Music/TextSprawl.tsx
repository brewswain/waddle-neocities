import Link from "next/link";
import React from "react";

const TextSprawl = () => {
  return (
    <article className="flex w-full justify-center">
      <p className="max-w-[85ch] text-center text-lg font-medium text-white opacity-70">
        Why don&apos;t you put down your knapsack, grab a drink, and possibly
        read about some music that&apos;s{" "}
        <span className=" cursor-pointer border-b border-b-violet-500 italic text-violet-500">
          {/* <Link href={"/music/hodgepodge"}>currently interesting</Link> */}
          <Link href={"#"}>currently interesting</Link>
        </span>
         to me at the moment.
      </p>
    </article>
  );
};

export default TextSprawl;
