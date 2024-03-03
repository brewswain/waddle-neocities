import Link from "next/link";

import "./HomePage.styles.scss";

const Preamble = () => {
  return (
    <article
      className={
        "homepage-card homepage-card__preamble my-4 flex max-h-dvh flex-col gap-4 sm:my-2 sm:h-full sm:max-w-[330px] md:mr-4 md:w-[500px] md:max-w-[500px] lg:m-0"
      }
    >
      <h1 className="homepage-card__header homepage-card__preamble__gradient w-full p-2 font-merriweather">
        Hey!
      </h1>
      <p className="homepage-card__content mx-auto w-3/4 justify-center font-inter">
        Welcome to whatever interests me enough to inspire me to babble about
        it! I haven&apos;t quite pinned down what kind of stuff I&apos;ll be
        talking about just yet, but expect to see stuff like:
      </p>
      <span className="pb-4">
        <Link href={"/dev-blog"}>
          <span className="homepage-card__link">coding,</span>
        </Link>
        <Link href="#">
          <span className="homepage-card__link">music,</span>
        </Link>
        <Link href="#">
          <span className="homepage-card__link">pokemon,</span>
        </Link>
        <Link href="#">
          <span className="homepage-card__link">etc,</span>
        </Link>
        .
      </span>
    </article>
  );
};

export default Preamble;
