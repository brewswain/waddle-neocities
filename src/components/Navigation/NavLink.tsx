"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  slug: string;
}

const NavLink = ({ href, slug }: NavLinkProps) => {
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  return (
    <li
      className={`w-1/2 sm:w-full lg:w-auto lg:max-w-[20ch] ${isNotHomePage ? "flex justify-center" : ""}`}
    >
      <Link href={href}>
        {/* TODO: instead of font color, render a lil maxim tomato or something next to our active link */}
        <span
          className={`${
            pathname === href ? "text-lg text-pink-500" : "text-indigo-500"
          } ${isNotHomePage ? "hidden" : ""} font-semibold lg:hidden`}
        >
          -{" "}
        </span>
        <span
          className={`${
            pathname === href ? "text-lg text-pink-500" : "text-indigo-500"
          } font-semibold`}
        >
          {slug}
        </span>
      </Link>
    </li>
  );
};

export default NavLink;
