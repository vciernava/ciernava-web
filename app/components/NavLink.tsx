import Link from "next/link";
import smoothScroll from "../smoothscroll";
import { MouseEvent } from "react";

interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, className = '' ,children}) => {
    const linkClass = `nav-link ${className}`;

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        smoothScroll(href);
      };

    return (
        <li className={linkClass}>
            <Link href={href} onClick={handleClick}>
                {children}
            </Link>
        </li>
    )
}

export default NavLink;