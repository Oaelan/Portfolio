import Link from 'next/link';

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-gray dark:bg-light-dark h-15 px-10 flex items-center sm:justify-between justify-center">
      <Link href="/" className="text-2xl font-bold hidden sm:block">
        프론트엔드 개발자를 꿈꾸는 오애란 입니다.
      </Link>
      <menu className="flex gap-4">
        <Link className="hover:text-emerald-400" href="/">
          Home
        </Link>
        <Link className="hover:text-emerald-400" href="/about">
          About
        </Link>
        <Link className="hover:text-emerald-400" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-emerald-400" href="/contact">
          Contact
        </Link>
      </menu>
    </nav>
  );
}

export default Nav;
