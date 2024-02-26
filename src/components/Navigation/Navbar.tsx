"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const positionVariants = {
    rowStart: "sm:row-start-2",
    rowEnd: "sm:row-end-2",
    columnStart: "sm:col-start-8 md:col-start-6",
    columnEnd: "sm:col-end-8 md:col-end-6",
  };

  return (
    // TODO: Add active Links
    <nav
      className={`sticky top-0 flex flex-col border border-pink-200 bg-slate-100 px-4 py-2 sm:mr-4 sm:flex sm:h-full sm:max-w-[200px] sm:self-center sm:justify-self-end md:static md:max-w-[200px] md:self-end md:bg-green-500 ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
    >
      <button
        type="button"
        className="absolute right-4 top-4 sm:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Image
          src={
            isCollapsed
              ? "/images/kirby-sleeping.gif"
              : "/images/kirby-umbrella.gif"
          }
          width={50}
          height={50}
          alt=""
        />
      </button>
      {isCollapsed ? (
        <header className="flex min-h-[60px] items-center justify-center ">
          <h1 className="text-2xl font-semibold ">Navigation</h1>
        </header>
      ) : (
        <section className="sm:flex sm:h-full sm:justify-center">
          <ul className="item flex h-full flex-col justify-around pl-4">
            <NavLink href="/" slug="Home" />
            <NavLink href="/dev-blog" slug="Dev Blog" />

            {/* Replace with NavLink once we actually have our About Page scaffolded */}
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">About</span> WIP!
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Webring</span>{" "}
                WIP!
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Music</span> WIP!
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Pokemon</span>{" "}
                WIP!
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">OC Corner</span>{" "}
                WIP!
              </li>
            </Link>
            <Link href="#">
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Guestbook</span>{" "}
                WIP!
              </li>
            </Link>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
