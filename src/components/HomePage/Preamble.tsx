import Link from "next/link";

import { LayoutProps } from "@/app/consts/interfaces";

const Preamble = () => {
  const positionVariants = {
    rowStart: "sm:row-start-2",
    rowEnd: "sm:row-end-4",
    columnStart: "sm:col-start-3",
    columnEnd: "sm:col-end-6 md:col-end-5",
  };
  return (
    // TODO: change max height to a calc once I have the NavBar's height decided on, but for now the current max height is fine.
    // Also because we want overflow, we're prob gonna reduce the width of our cards a bit so that the user can scroll around our element
    <article
      className={`flex flex-col bg-slate-100 w-dvw overflow-auto max-h-dvh gap-4 p-4 border border-pink-200 sm:w-full sm:h-full ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
    >
      <p>Hey!</p>
      <p>
        If you like ramblings of whatever drew my interest at any given point in
        time, then welcome! I haven&apos;t quite pinned down what kind of stuff
        I&apos;ll be talking about just yet, but for now expect to see stuff
        like:
      </p>
      <span>
        <Link href={"/dev-blog"}>
          <span className="text-indigo-500 font-medium italic underline">
            coding
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="text-indigo-500 font-medium italic underline ">
            music
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="text-indigo-500 font-medium italic underline">
            pokemon
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="text-indigo-500 font-medium italic underline">
            etc
          </span>
        </Link>
        .
      </span>
    </article>
  );
};

export default Preamble;
