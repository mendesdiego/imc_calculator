import React, { useEffect } from 'react';
import Logo from '../logo/Logo';

export function Header() {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector<HTMLDivElement>('#mainHeader');
      if (header) {
        let scrollPosition = window.scrollY;
        header.style.position = scrollPosition > 10 ? 'relative' : 'fixed';
      }
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full flex items-center justify-center pt-8 pr-0 pb-0 xl:pt-8" id="mainHeader">
      <Logo />
    </header>
  );
}
