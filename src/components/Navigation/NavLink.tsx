import Link from "next/link";

interface NavLinkProps {
  href: string;
  slug: string;
}

const NavLink = ({ href, slug }: NavLinkProps) => {
  return (
    <Link href={href}>
      <li>{slug}</li>
    </Link>
  );
};

export default NavLink;
