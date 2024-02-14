import Link from "next/link";

const Preamble = () => {
  return (
    // TODO: change max height to a calc once I have the NavBar's height decided on, but for now the current max height is fine.
    // Also because we want overflow, we're prob gonna reduce the width of our cards a bit so that the user can scroll around our element
    <article className="flex flex-col bg-white w-dvw overflow-auto max-h-dvh gap-4 p-4">
      <p>Hey!</p>
      <p>
        If you like ramblings of whatever drew my interest at any given point in
        time, then welcome! I haven&apos;t quite pinned down what kind of stuff
        I&apos;ll be talking about just yet, but for now expect to see stuff
        like:
      </p>
      <span>
        <Link href={"/dev-blog"}>
          <span className="text-indigo-700 font-medium italic">coding, </span>
        </Link>
        <Link href="#">
          <span className="text-indigo-700 font-medium italic">music, </span>
        </Link>
        <Link href="#">
          <span className="text-indigo-700 font-medium italic">pokemon, </span>
        </Link>
        <Link href="#">
          <span className="text-indigo-700 font-medium italic">etc.</span>
        </Link>
      </span>
    </article>
  );
};

export default Preamble;
