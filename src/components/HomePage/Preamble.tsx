import Link from "next/link";

import { LayoutProps } from "@/app/consts/interfaces";

const Preamble = () => {
  const positionVariants = {
    rowStart: "sm:row-start-2 md:row-start-2",
    rowEnd: "sm:row-end-3",
    columnStart: "sm:col-start-2 md:col-start-4",
    columnEnd: "sm:col-end-7 md:col-end-5 lg:col-end-6",
  };
  return (
    // TODO: change max height to a calc once I have the NavBar's height decided on, but for now the current max height is fine.
    // Also because we want overflow, we're prob gonna reduce the width of our cards a bit so that the user can scroll around our element
    <article
      className={`my-4 flex max-h-dvh flex-col  gap-4 overflow-auto border border-pink-200 bg-slate-100 p-4 sm:my-2 sm:h-full  sm:max-w-[330px] md:w-full  ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
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
          <span className="font-medium italic text-indigo-500 underline">
            coding
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="font-medium italic text-indigo-500 underline ">
            music
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="font-medium italic text-indigo-500 underline">
            pokemon
          </span>
          ,{" "}
        </Link>
        <Link href="#">
          <span className="font-medium italic text-indigo-500 underline">
            etc
          </span>
        </Link>
        .
      </span>
    </article>
  );
};

export default Preamble;
