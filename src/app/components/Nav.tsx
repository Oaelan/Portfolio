'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Feedback' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-gray dark:bg-light-dark h-15 px-10 flex items-center sm:justify-between justify-center">
      <Link href="/" className="text-2xl font-bold hidden sm:block">
        프론트엔드 개발자를 꿈꾸는 오애란 입니다.
      </Link>
      <menu className="flex gap-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              className={`transition-colors duration-200 ${
                isActive
                  ? 'text-gray-500 dark:text-emerald-400 font-semibold'
                  : 'dark:hover:text-emerald-400 hover:text-gray-500'
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </menu>
    </nav>
  );
}

export default Nav;
