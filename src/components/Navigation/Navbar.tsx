import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    // Add active Links
    <nav className="bg-white w-dvw flex flex-col sticky top-0">
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
      </ul>
    </nav>
  );
};

export default Navbar;
