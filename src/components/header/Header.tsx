import Logo from "../logo/Logo";

document.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  let scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    header.style.position = 'relative';
  } else {
    header.style.position = 'fixed';
  }
})

export function Header() {
  return (
    <header className="fixed w-full flex items-center justify-center pt-8 pr-0 pb-0 xl:pt-8" id="mainHeader">
      <Logo />
    </header>
  )
}
