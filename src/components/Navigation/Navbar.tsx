"use client";

import { useState } from "react";

import Image from "next/image";

import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

import "./Navigation.styles.scss";

interface NavbarProps {
  includeVerticalView?: boolean;
}

const Navbar = ({ includeVerticalView }: NavbarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    // TODO: Add active Links

    <nav
      className={`flex flex-col bg-slate-100 px-4 py-2 pl-10  sm:px-10 lg:w-full lg:max-w-full ${includeVerticalView ? "sm:flex sm:h-full sm:max-w-[200px] sm:self-center sm:justify-self-end md:static md:mr-4 md:max-w-[200px] md:self-end" : "sm:w-[100vw] sm:max-w-[100vw] lg:justify-center lg:gap-[50px]"} navbar__container`}
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
          <ul
            className={`flex h-full justify-around gap-4 pl-4 text-center sm:pl-0 lg:w-full lg:flex-row  lg:gap-2 ${includeVerticalView ? "lg: flex-col md:items-center" : "w-dvw flex-row items-center justify-center lg:justify-center lg:gap-[50px]"}`}
          >
            <NavLink href="/" slug="Home" />
            <NavLink href="/dev-blog" slug="Dev Blog" />
            <NavLink href="/about" slug="About" />
            <NavLink href="/webring" slug="Webring" />
            <NavLink href="/music" slug="Music" />
            <NavLink href="#" slug="Pokemon" />
            <NavLink href="#" slug="OC Corner" />
            <NavLink href="#" slug="Guestbook" />

            {/* Replace with NavLink once we actually have our About Page scaffolded
            <div
              className={`flex gap-4 ${isNotHomePage ? "" : "flex-col lg:flex-row"}`}
            >
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">About</span>
              </li>
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Webring</span>
              </li>
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Music</span>
              </li>
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Pokemon</span>
              </li>
              <li className="w-[8.5ch] cursor-none">
                <span className=" text-gray-500 line-through">OC Corner</span>
              </li>
              <li className="cursor-none">
                <span className=" text-gray-500 line-through">Guestbook</span>
              </li>
            </div> */}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
