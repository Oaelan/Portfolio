import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from './components/Nav';

export const metadata: Metadata = {
  title: "Aelan's Portfolio",
  description: "Aelan's Portfolio",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="font-family-sans">
      <body className="dark:bg-black dark:text-white">
        <Nav />
        <main className="pt-15 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
