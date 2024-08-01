'use client';

import useScrollAnimation from '../utils/useScrollAnimation';
import Button from './Button';
import HrefLink from './Link';
import NavLink from './NavLink';
import logo from '../assets/logo.png';
import Image from 'next/image';

const Navigation = () => {
  const navRef = useScrollAnimation();
  return (
    <header ref={navRef} className='styled-header'>
      <nav className='styled-nav'>
        <HrefLink href='/' className='after:hidden'>
          <Image src={logo} alt='My logo' height={64} width={64} />
        </HrefLink>
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
