"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const ScrollableNavbar = () => {
  const [previousScrollPosition, setPreviousScrollPosition] =
    useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (previousScrollPosition > currentScrollPosition) {
        setHide(false); // show Navbar
      } else {
        setHide(true); // hide Navbar
      }

      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <nav
      className={`fixed top-0 flex h-12 w-dvw items-center justify-around bg-slate-700 text-lg font-medium text-slate-400 transition ${
        hide ? "-translate-y-[50px]" : ""
      }  sm:justify-center sm:gap-10 `}
    >
      <Link href="/dev-blog" className="transition hover:text-slate-300">
        Dev Blog
      </Link>
      <Link href="/" className="transition hover:text-slate-300">
        Home
      </Link>
    </nav>
  );
};

export default ScrollableNavbar;
