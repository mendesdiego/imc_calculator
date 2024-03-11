import { useEffect } from 'react';
import Logo from '../logo/Logo';

export function Header() {
  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById('mainHeader');
      let scrollPosition = window.scrollY;

      if (scrollPosition > 10) {
        header.style.position = 'relative';
      } else {
        header.style.position = 'fixed';
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
