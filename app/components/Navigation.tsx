'use client';

import useScrollAnimation from '../utils/useScrollAnimation';
import Badge from './Badge';
import Button from './Button';
import HrefLink from './Link';
import NavLink from './NavLink';

const Navigation = () => {
  const navRef = useScrollAnimation();
  return (
    <header ref={navRef} className='styled-header'>
      <nav className='styled-nav'>
        <HrefLink href='/' className='after:hidden'>
          <div className='bg-slate-950 h-12 w-12'></div>
        </HrefLink>
        <Badge>This website is still under development</Badge>
        <div className='nav-links'>
          <ol>
            <NavLink href='#about'>About</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
            <Button href='/' className='ml-2 text-sm !px-4 !py-2'>
              Resume
            </Button>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
