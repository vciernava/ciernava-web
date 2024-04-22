"use client";

import Link from "next/link";
import smoothScroll from "../smoothscroll";
import { MouseEvent, useEffect, useState } from "react";

interface NavLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, className = '' ,children}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const threshold = 0.5;
            setIsActive(rect.top <= window.innerHeight * threshold && rect.bottom >= window.innerHeight * (1 - threshold));
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [href]);

    const linkClass = `nav-link ${isActive ? 'active' : ''} ${className}`;

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