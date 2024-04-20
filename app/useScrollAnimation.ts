"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useScrollAnimation = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Downscroll code
        gsap.to(navRef.current, { y: '-100%', duration: 0.3 });
        if(st > 0) {
            navRef.current?.classList.add('scrolled')
        }
      } else {
        // Upscroll code
        gsap.to(navRef.current, { y: '0%', duration: 0.3 });
        if(st === 0) {
            navRef.current?.classList.remove('scrolled')
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return navRef;
};

export default useScrollAnimation;