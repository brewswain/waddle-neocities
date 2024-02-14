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
      className={`flex justify-around w-dvw bg-slate-700 text-lg h-12 font-medium items-center fixed top-0 transition text-slate-400 ${
        hide ? "-translate-y-[50px]" : ""
      }  sm:justify-center sm:gap-10 `}
    >
      <Link href="/dev-blog" className="hover:text-slate-300 transition">
        Dev Blog
      </Link>
      <Link href="/" className="hover:text-slate-300 transition">
        Home
      </Link>
    </nav>
  );
};

export default ScrollableNavbar;
