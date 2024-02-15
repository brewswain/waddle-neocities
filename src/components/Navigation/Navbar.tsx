"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";
import { LayoutProps } from "@/app/consts/interfaces";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const positionVariants = {
    rowStart: "sm:row-start-2",
    rowEnd: "sm:row-end-1",
    columnStart: "sm:col-start-1 md:col-start-3",
    columnEnd: "sm:col-end-6 md:col-end-5",
  };

  return (
    // TODO: Add active Links
    <nav
      className={`bg-slate-100 w-dvw flex flex-col sticky top-0 px-4 py-2 border border-pink-200 sm:flex sm:w-full sm:self-end ${positionVariants.rowStart}  ${positionVariants.rowEnd} ${positionVariants.columnStart} ${positionVariants.columnEnd}`}
    >
      <button
        type="button"
        className="absolute top-4 right-4 md:hidden"
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
        <header className="min-h-[60px] items-center flex justify-center ">
          <h1 className="text-2xl font-semibold ">Navigation</h1>
        </header>
      ) : (
        <ul>
          <NavLink href="/" slug="Home" />
          <NavLink href="/dev-blog" slug="Dev Blog" />
          <NavLink href="/construction" slug="Construction Page" />

          {/* Replace with NavLink once we actually have our About Page scaffolded */}
          <Link href="#">
            <li className="cursor-none">
              <span className=" text-gray-500 line-through">About</span> WIP!
            </li>
          </Link>
          <Link href="#">
            <li className="cursor-none">
              <span className=" text-gray-500 line-through">Webring</span> WIP!
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
