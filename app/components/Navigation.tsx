"use client";

import useScrollAnimation from "../useScrollAnimation";
import NavLink from "./NavLink";

const Navigation = () => {
    const navRef = useScrollAnimation();
    return (
        <header ref={navRef} className="styled-header">
        <nav className="styled-nav">
            <div className="nav-links">
              <ol>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </ol>
            </div>
          </nav>
          </header>
    )
}

export default Navigation;