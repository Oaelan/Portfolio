import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';

export const metadata: Metadata = {
  title: "Aelan's Portfolio",
  description: "Aelan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-family-sans">
      <body className="dark:bg-black dark:text-white pt-15">
        <Nav />
        {children}
      </body>
    </html>
  );
}
