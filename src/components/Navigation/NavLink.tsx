"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Navigation.styles.scss";

interface NavLinkProps {
  href: string;
  slug: string;
}

const NavLink = ({ href, slug }: NavLinkProps) => {
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  return (
    <Link href={href}>
      <li
        className={`cursor flex w-1/2 items-center sm:w-full lg:w-auto lg:max-w-[20ch] ${isNotHomePage ? "flex justify-center" : ""} navbar__link ${
          pathname === href
            ? "navbar__link--active py-10"
            : "navbar__link--inactive"
        }`}
      >
        {/* TODO: instead of font color, render a lil maxim tomato or something next to our active link */}
        <span
          className={` ${isNotHomePage ? "" : "ml-4 sm:ml-0"} ${
            pathname === href ? "navbar__link--underlined" : ""
          } font-semibold`}
        >
          {slug}
        </span>
      </li>
    </Link>
  );
};

export default NavLink;
