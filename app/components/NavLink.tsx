import Link from "next/link";

interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, className = '' ,children}) => {
    const linkClass = `nav-link ${className}`;

    return (
        <li className={linkClass}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}

export default NavLink;